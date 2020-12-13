import { ListPromtComponent } from './list-promt/list-promt.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class AddListService {
  constructor(private _dialog: MatDialog) {}

  openPromt(title: string, message: string) {
    const dialog = this._dialog.open(ListPromtComponent, {
      data: { title, message },
    });

    return dialog.beforeClosed();
  }
}
