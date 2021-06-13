import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { BootstrapReactiveFormComponent } from './components/bootstrap-reactive-form/bootstrap-reactive-form.component';
import { CompFormComponent } from './components/comp-form/comp-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: 'form', component: CompFormComponent},
  {path: 'contactForm', component: ContactFormComponent},
  {path: 'bootstrap-form', component: BootstrapFormComponent},
  {path: 'bootstrap-rform', component: BootstrapReactiveFormComponent},
  {path: 'login-form', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
