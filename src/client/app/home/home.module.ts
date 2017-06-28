import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './login/private.component';


@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, LoginComponent, PrivateComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
