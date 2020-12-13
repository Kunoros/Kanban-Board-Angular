import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class BoradService {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _location: Location
  ) {}

  getBoards() {
    return this._http.get('/api/boards');
  }

  getBoardDetails(id: string) {
    return this._http.get(`/api/boards/${id}`);
  }

  createBoard(name: string) {
    this._http
      .post(url + '/api/boards', { name }, { responseType: 'text' })
      .subscribe();
  }

  createList(name: string, id: string) {
    this._http
      .post(url + `/api/boards/${id}`, { name }, { responseType: 'text' })
      .subscribe();
    // console.log(
    //   `name of the new List ${name} and the id of the board is ${id}`
    // );
  }

  deleteBoard(id: string) {
    this._http.delete(`/api/boards/${id}`).subscribe(
      (deletedId) =>
        console.log(`Board whith Id ${deletedId} has been deleted.`),
      (err) => console.log(err)
    );
  }

  deleteList(listId: string) {
    console.log(listId);
    this._http.delete(`/api/boards/list/${listId}`).subscribe(
      (listId) => console.log(`List whith Id ${listId} has been deleted.`),
      (err) => console.log(err)
    );
  }

  createCard(cardName: string, listId: string, cardDescription: string) {
    this._http
      .post(
        url + `/api/boards/list/${listId}`,
        { cardName, cardDescription },
        { responseType: 'text' }
      )
      .subscribe();
    this.refresh('39');
  }

  deleteCard(cardId: string) {
    this._http.delete(`/api/boards/list/card/${cardId}`).subscribe(
      (cardId) => console.log(`List whith Id ${cardId} has been deleted.`),
      (err) => console.log(err)
    );
  }

  refresh(boardId: string) {
    this._router
      .navigateByUrl(`manage-board/board/${boardId}`, {
        skipLocationChange: true,
      })
      .then(() => {
        this._router.navigate([this._location.path()]);
      });
  }
}
