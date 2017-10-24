import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { DungballService } from './dungball.service';
import { DungbeetleService } from './dungbeetle.service';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { DungballComponent } from './dungball/dungball.component';
import { DungbeetleComponent } from './dungbeetle/dungbeetle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DungballformComponent } from './dungballform/dungballform.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    ListingsComponent,
    DungballComponent,
    DungbeetleComponent,
    DashboardComponent,
    NavbarComponent,
    DungballformComponent,
    FilterPipe,
    SortPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [DungballService, DungbeetleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
