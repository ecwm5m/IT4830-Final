import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailyComponent } from './pages/daily/daily.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    WeeklyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
