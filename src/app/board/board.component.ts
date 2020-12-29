import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoradService } from '../board/borad.service';
import { AddListService } from '../add-list/add-list.service';
import { AddCardService } from '../add-card/add-card.service';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  id: string;
  board: any;
  card: any;
  subs = new Subscription();
  ids = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _board: BoradService,
    private _addList: AddListService,
    private _addCard: AddCardService,
    private _dragulaService: DragulaService
  ) {
    // disable button drag in ul
    _dragulaService.createGroup('card-ul', {
      invalid: (el) => el.classList.contains('donotdrag'),
    });

    this.subs.add(
      this._dragulaService
        .dropModel('card-ul')
        .subscribe(
          ({
            name,
            el,
            target,
            source,
            sibling,
            item,
            sourceModel,
            targetModel,
            sourceIndex,
            targetIndex,
          }) => {
            /*name, el, target, source, sibling  */
            console.log(
              // name,
              // el,
              target
              // source,
              // sibling,
              // item,
              // sourceModel
              // targetModel
              // sourceIndex,
              // targetIndex
            );
          }
        )
    );
  }

  addList() {
    this._addList
      .openPromt('Create new List', 'Please enter the title for your new List:')
      .subscribe((name) => {
        if (name) {
          this._board.createList(name, this.id);
        }
      });
  }

  listDelete(listId: string) {
    this._board.deleteList(listId);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  addCard(listId: string) {
    // console.log('click add card');
    this._addCard
      .openPromt(
        'Create new Card',
        'Please enter the title for your new Card:',
        'Enter the card description:'
      )
      .subscribe((name) => {
        if (name) {
          this._board.createCard(name.name, listId, name.description);
        }
      });
  }

  cardDelete(id: string) {
    this._board.deleteCard(id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  drop(list_id) {
    this.ids['list_id'] = list_id;
  }

  dropLi(card_id) {
    this.ids['card_id'] = card_id;
    this._board.updateCard(this.ids);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  ngOnInit(): void {
    // Get detailed board information using id from board service
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this._board.getBoardDetails(this.id).subscribe((data) => {
        this.board = data;
      });
    });
  }
}
