import { BoradService } from './board/borad.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Component Imports
import { AppComponent } from './app.component';
import { ManageBoardsComponent } from './manage-boards/manage-boards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoardComponent } from './board/board.component';
// Dragula Imports
import { DragulaModule } from 'ng2-dragula';
// Kendo UI Imports
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    ManageBoardsComponent,
    NavBarComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    NavigationModule,
    ButtonsModule,
  ],
  providers: [BoradService],
  bootstrap: [AppComponent],
})
export class AppModule {}
