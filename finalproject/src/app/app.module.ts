import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { DailyComponent } from './pages/daily/daily.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './pages/app.services';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { PostListComponent } from './post/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    WeeklyComponent,
    HeaderComponent,
    FooterComponent,
    PostCreateComponent,
    StartComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
