import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompFormComponent } from './components/comp-form/comp-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { BootstrapReactiveFormComponent } from './components/bootstrap-reactive-form/bootstrap-reactive-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompFormComponent,
    ContactFormComponent,
    BootstrapFormComponent,
    BootstrapReactiveFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
