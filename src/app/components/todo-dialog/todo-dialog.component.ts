import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  constructor(private dialogRef: DialogRef) {}
  faClock = faClock;
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  close() {
    this.dialogRef.close();
  }
}
