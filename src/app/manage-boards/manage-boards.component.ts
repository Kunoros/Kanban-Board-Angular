import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoradService } from '../board/borad.service';

@Component({
  selector: 'app-manage-boards',
  templateUrl: './manage-boards.component.html',
  styleUrls: ['./manage-boards.component.scss'],
})
export class ManageBoardsComponent implements OnInit {
  boards;
  // boards = [
  //   { id: '1', name: 'Board 1' },
  //   { id: '2', name: 'Board 2' },
  //   { id: '3', name: 'Board 3' },
  //   { id: '4', name: 'Board 4' },
  //   { id: '5', name: 'Board 5' },
  // ];

  constructor(private _route: Router, private _board: BoradService) {}

  boardClicked(board) {
    this._route.navigate(['manage-board', board]);
  }

  ngOnInit(): void {
    this.boards = this._board.getBoards();
  }
}
