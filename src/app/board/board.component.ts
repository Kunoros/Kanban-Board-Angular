import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoradService } from '../board/borad.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  id: string;
  board : any;
  card: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _board: BoradService
  ) {}

  ngOnInit(): void {
    // Get detailed board information using id from board service
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
       this._board.getBoardDetails(this.id).subscribe((data) => {
        this.board = data
      });

    });
  }
}
