import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoradService {
  constructor(private _http: HttpClient) {}

  getBoards() {
    return this._http.get('/api/boards');
  }

  getBoardDetails(id: string) {
    return this._http.get(`/api/boards/${id}`)
  }
}
