import { DialogService } from './../dialogs/dialog.service';
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
  // loadBoards() {
  //   this.loadBoards();
  // }

  constructor(
    private _route: Router,
    private _board: BoradService,
    private _dialogs: DialogService
  ) {}

  boardClicked(board) {
    // ? moet de click event aan de /api/board route linken van de node server
    this._route.navigate(['manage-board/board', board]);
  }

  createBoard() {
    this._dialogs
      .openPromt(
        'Create new Board',
        'Please enter the title for your new Board:'
      )
      .subscribe((name) => {
        if (name) {
          this._board.createBoard(name);
        }
      });
  }

  boardDelete(boardId) {
    this._board.deleteBoard(boardId);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  // Get induvial boards from the board service
  ngOnInit(): void {
    this._board.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }
}
