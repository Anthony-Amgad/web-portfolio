import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ExperiencepageComponent } from './experiencepage/experiencepage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { FavouritespageComponent } from './favouritespage/favouritespage.component';

const routes: Routes = [
  {path:"", component:MainpageComponent},
  {path:"about", component:AboutpageComponent},
  {path:"experience", component:ExperiencepageComponent},
  {path:"projects", component:ProjectspageComponent},
  {path:"favourites", component:FavouritespageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
