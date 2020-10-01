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

  board;

  // board = {
  //   lists: [
  //     {
  //       title: 'list 1',
  //       cards: [{ title: 'card 1' }, { title: 'card 2' }],
  //     },
  //     {
  //       title: 'list 2',
  //       cards: [{ title: 'card 3' }, { title: 'card 4' }],
  //     },
  //     {
  //       title: 'list 2',
  //       cards: [{ title: 'card 3' }, { title: 'card 4' }],
  //     },
  //     {
  //       title: 'list 2',
  //       cards: [{ title: 'card 3' }, { title: 'card 4' }],
  //     },
  //   ],
  // };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _board: BoradService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.board = this._board.getBoardDetails(this.id);
    });
  }
}
