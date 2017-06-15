import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ObjectiveComponent } from './components/objective/objective.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'stopwatch', component: StopwatchComponent, pathMatch: 'full'},
  {path:'objective', component: ObjectiveComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ObjectiveComponent,
    StopwatchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
