import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { namesRoute } from '../data/name-roures';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { RegistrationComponent } from '../components/registration/registration.component';

const routes: Routes = [
  { path: namesRoute.HOME, component: HomePageComponent },
  { path: namesRoute.REGISTRATION, component: RegistrationComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
