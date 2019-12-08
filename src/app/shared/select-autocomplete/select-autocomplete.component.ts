import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss']
})
export class SelectAutocompleteComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  formControlRef: FormControl;

  @Input()
  label: string;

  @Input()
  placeholderLabel: string;

  private _collection: any = null;

  @Input()
  set collection(data: any) {
    console.log('set data');
    console.log(data);
    this._collection = data;
    this.updateData();
  }

  @Input()
  private labelField: string = 'name';

  @Input()
  private valueField: string = 'id';

  filterControl: FormControl = new FormControl();

  filteredData: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _onDestroy = new Subject<void>();

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  labelGetter(val: any) {
    return val[this.labelField];
  }

  valueGetter(val: any) {
    return val[this.valueField];
  }

  protected setInitialValue() {
    this.filteredData
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: any, b: any) =>
          a && b && this.valueGetter(a) === this.valueGetter(b);
      });
  }

  protected filterCollection() {
    if (!this._collection) {
      return;
    }

    let search = this.filterControl.value;
    if (!search) {
      this.filteredData.next(this._collection.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredData.next(
      this._collection.filter((element: any) =>
        this.labelGetter(element).toLowerCase().indexOf(search) > -1)
    );
  }

  constructor() { }

  updateData() {
    //this.formControlRef.setValue(this.collection[0]);
    if (this._collection == null) {
      return;
    }
    this.filteredData.next(this._collection.slice());

    this.filterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        console.log('value changed')
        this.filterCollection();
      });
  }

  ngOnInit() {

  }

}
