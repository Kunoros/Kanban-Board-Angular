import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoradService {
  constructor() {}

  boards = [
    {
      id: '1',
      name: 'Board 1',
      lists: [
        {
          title: 'list 1',
          cards: [{ title: 'card 1' }, { title: 'card 2' }],
        },
        {
          title: 'list 2',
          cards: [{ title: 'card 3' }, { title: 'card 4' }],
        },
      ],
    },
    {
      id: '2',
      name: 'Board 2',
      lists: [
        {
          title: 'list 1',
          cards: [{ title: 'card 1' }, { title: 'card 2' }],
        },
        {
          title: 'list 2',
          cards: [{ title: 'card 3' }, { title: 'card 4' }],
        },
      ],
    },
    {
      id: '3',
      name: 'Board 3',
      lists: [
        {
          title: 'list 2',
          cards: [{ title: 'card 1' }, { title: 'card 2' }],
        },
        {
          title: 'list 2',
          cards: [{ title: 'card 3' }, { title: 'card 4' }],
        },
        {
          title: 'list 3',
          cards: [{ title: 'card 5' }, { title: 'card 6' }],
        },
        {
          title: 'list 4',
          cards: [{ title: 'card 7' }, { title: 'card 8' }],
        },
      ],
    },
  ];

  getBoards() {
    return this.boards.map((b) => ({ name: b.name, id: b.id }));
  }

  getBoardDetails(id: string) {
    return this.boards.filter((b) => b.id === id)[0];
  }
}
