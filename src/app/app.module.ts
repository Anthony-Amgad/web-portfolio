import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { ExperiencepageComponent } from './experiencepage/experiencepage.component';
import { FavouritespageComponent } from './favouritespage/favouritespage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AboutpageComponent,
    ProjectspageComponent,
    ExperiencepageComponent,
    FavouritespageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
