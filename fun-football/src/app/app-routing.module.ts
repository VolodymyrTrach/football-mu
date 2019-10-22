import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {StandingsTableComponent} from './standings-table/standings-table.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'registration', component: RegisterFormComponent},
  {path: 'table', component: StandingsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
