import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';
import { HomeComponent } from './home/home.component'; // Import the new component

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home page on default
  { path: 'home', component: HomeComponent },
  { path: 'password-checker', component: PasswordCheckerComponent },
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
