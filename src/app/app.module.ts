import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"Register", component: RegisterComponent},
  {
    path:"Home", 
    component: HomeComponent,
    children: [
      {
        path:"",
        loadChildren: () =>
          import("./dash-board/dash-board.module").then((u) => u.DashBoardModule),
      },
      {
        path:"todo",
        loadChildren: () =>
          import("./todo/todo.module").then((u) => u.TodoModule),
      },
    ],
  },
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
