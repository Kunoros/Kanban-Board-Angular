import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-promt',
  templateUrl: './list-promt.component.html',
  styleUrls: ['./list-promt.component.scss'],
})
export class ListPromtComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  name: string;
  id: string;

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  ngOnInit(): void {}
}
