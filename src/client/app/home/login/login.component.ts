import { Component, ElementRef } from '@angular/core';
import { AuthService, User } from '../../dataservices/auth.service';

@Component({
	moduleId: module.id,
	selector: 'login-form',
	providers: [ AuthService ],
	templateUrl: 'login.component.html',	
})

export class LoginComponent {
	public user = new User('', '');
	public errorMsg: string = '';

	constructor( private _service:AuthService ){}

	login(){
		if(!this._service.login(this.user)){
			this.errorMsg = 'Failed to login';
		}
	}

}