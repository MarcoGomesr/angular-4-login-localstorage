import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../dataservices/auth.service';

@Component({
	moduleId: module.id,
	// selector: 'private-login-form',
	selector: 'login-form',
	providers: [ AuthService ],
	templateUrl: 'private.component.html'
})

export class PrivateComponent {
	constructor( private _service:AuthService ){}

	ngOnInit(){
		this._service.ckeckCredentials();
	}

	logout(){
		this._service.logout();
	}

}
