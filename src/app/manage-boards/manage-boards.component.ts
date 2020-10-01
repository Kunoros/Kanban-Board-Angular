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

  constructor(private _route: Router, private _board: BoradService) {}

  boardClicked(board) {
    this._route.navigate(['manage-board', board]);
  }

  // Get induvial boards from the board service
  ngOnInit(): void {
    this.boards = this._board.getBoards();
  }
}
