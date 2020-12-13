import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-promt-dialog',
  templateUrl: './promt-dialog.component.html',
  styleUrls: ['./promt-dialog.component.scss'],
})
export class PromtDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  name: string;

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  ngOnInit(): void {}
}
