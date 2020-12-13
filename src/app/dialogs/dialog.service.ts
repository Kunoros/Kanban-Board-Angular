import { PromtDialogComponent } from './promt-dialog/promt-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _dialog: MatDialog) {}

  openPromt(title: string, message: string) {
    const dialog = this._dialog.open(PromtDialogComponent, {
      data: { title, message },
    });

    return dialog.beforeClosed();
  }
}
