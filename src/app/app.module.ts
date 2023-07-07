import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidationLabelComponent } from './components/validation.label/validation.label.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { OverlayLoaderComponent } from './components/overlay.loader/overlay.loader.component';
import { ModalWindowComponent } from './components/modal.window/modal.window.component';

@NgModule({
  declarations: [AppComponent, ValidationLabelComponent, HomePageComponent, RegistrationComponent, OverlayLoaderComponent, ModalWindowComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ModalWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
