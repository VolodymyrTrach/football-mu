import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {StandingsTableComponent} from './standings-table/standings-table.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminPageActivateGuard} from './guards/admin-page-activate.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'registration', component: RegisterFormComponent},
  {path: 'table', component: StandingsTableComponent},
  {path: 'admin', canActivate: [AdminPageActivateGuard], component: AdminPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
