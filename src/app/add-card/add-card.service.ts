import { CardPromtComponent } from './card-promt/card-promt.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class AddCardService {
  constructor(private _dialog: MatDialog) {}

  openPromt(title: string, message: string, description: string) {
    const dialog = this._dialog.open(CardPromtComponent, {
      data: { title, message, description },
    });

    return dialog.beforeClosed();
  }
}
