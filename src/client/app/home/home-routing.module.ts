import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './login/private.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: PrivateComponent},
      { path: 'login', component: LoginComponent }      
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
