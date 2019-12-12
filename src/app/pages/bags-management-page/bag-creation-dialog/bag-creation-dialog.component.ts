import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model';

@Component({
  selector: 'app-bag-creation-dialog',
  templateUrl: './bag-creation-dialog.component.html',
  styleUrls: ['./bag-creation-dialog.component.scss']
})
export class BagCreationDialogComponent implements OnInit {

  users: User[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(),
      responsibleId: new FormControl(),
      test: new FormControl()
    });

    this.http.get<User[]>("https://localhost:5001/api/users").toPromise().then(users => {
      this.users = users;
    });

  }
  form: FormGroup;

  options = [
    {
      display: 'One',
      value: '1'
    }, {
      display: 'Two',
      value: '2'
    }, {
      display: 'Three',
      value: '3'
    }, {
      display: 'Four',
      value: '4'
    }, {
      display: 'Five',
      value: '5'
    }, {
      display: 'Six',
      value: '6'
    }
  ];

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BagCreationDialogComponent>,
    private http: HttpClient) {

  }

  submit(form: any) {
    this.dialogRef.close(form.value);
  }

}
