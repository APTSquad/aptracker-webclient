import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'add-clients-dialog',
  templateUrl: 'add-clients-dialog.html',
})
export class AddClientsDialog {
  selectedClient: any;
  constructor(
    public dialogRef: MatDialogRef<AddClientsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  add() {
    this.dialogRef.close(this.selectedClient);
  }
}
