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
      responsibleId: new FormControl(null),
    });

    this.http.get<User[]>("http://localhost:5000/api/users").toPromise().then(users => {
      this.users = users;
    });

  }
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BagCreationDialogComponent>,
    private http: HttpClient) {

  }

  submit(form: any) {
    this.dialogRef.close(form.value);
  }

}
