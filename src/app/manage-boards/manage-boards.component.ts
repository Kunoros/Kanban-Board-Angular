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
    // ? moet de click event aan de /api/board route linken van de node server
    this._route.navigate(['manage-board/board', board]);
  }

  // Get induvial boards from the board service
  ngOnInit(): void {
    this._board.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }
}
