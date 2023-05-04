import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './pages/start/start.component';
import { DailyComponent } from './pages/daily/daily.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'weekly', component: WeeklyComponent },
  { path: 'daily', component: DailyComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
