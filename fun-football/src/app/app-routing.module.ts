import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {StandingsTableComponent} from './standings-table/standings-table.component';
import {AdminPageComponent} from './admin-page/admin-page.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'registration', component: RegisterFormComponent},
  {path: 'table', component: StandingsTableComponent},
  {path: 'admin', component: AdminPageComponent}, // todo: add guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
