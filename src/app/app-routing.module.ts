import { ManageBoardsComponent } from './manage-boards/manage-boards.component';
import { BoardComponent } from './board/board.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'manage-board/:id', component: BoardComponent },
  { path: 'manage-boards', component: ManageBoardsComponent },
  { path: '', redirectTo: 'manage-boards', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
