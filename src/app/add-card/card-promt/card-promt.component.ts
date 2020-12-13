import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-promt',
  templateUrl: './card-promt.component.html',
  styleUrls: ['./card-promt.component.scss'],
})
export class CardPromtComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message: string;
      description: string;
      id: string;
    }
  ) {}

  name: string;
  id: string;
  description: string;

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  ngOnInit(): void {}
}
