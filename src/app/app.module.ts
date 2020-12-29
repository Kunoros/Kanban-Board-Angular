import { BoradService } from './board/borad.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Component Imports
import { AppComponent } from './app.component';
import { ManageBoardsComponent } from './manage-boards/manage-boards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoardComponent } from './board/board.component';
import { PromtDialogComponent } from './dialogs/promt-dialog/promt-dialog.component';
// Dragula Imports
import { DragulaModule } from 'ng2-dragula';
// Kendo UI Imports
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup'; //! not working
// Material Imorts
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ListPromtComponent } from './add-list/list-promt/list-promt.component';
import { CardPromtComponent } from './add-card/card-promt/card-promt.component';

import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  declarations: [
    AppComponent,
    ManageBoardsComponent,
    NavBarComponent,
    BoardComponent,
    PromtDialogComponent,
    ListPromtComponent,
    CardPromtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    NavigationModule,
    ButtonsModule,
    HttpClientModule,
    PopupModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    DragDropModule,
  ],
  providers: [BoradService],
  bootstrap: [AppComponent],
})
export class AppModule {}
