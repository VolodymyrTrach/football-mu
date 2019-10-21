import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterFormComponent} from './register-form/register-form.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StandingsTableComponent } from './standings-table/standings-table.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    StandingsTableComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
