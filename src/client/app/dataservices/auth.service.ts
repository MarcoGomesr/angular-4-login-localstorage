import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
	constructor( public email: string, public password: string){}	
}

var users = [
	new User('admin@admin.com', '123'),
	new User('test@test.com', '123')
];

@Injectable()

export class AuthService {
	constructor( private _router: Router){}

	logout(){
		localStorage.removeItem('user');
		this._router.navigate(['Login']);
	}

	login(user: {'email': string, 'password': string}){
		var authenticateUser: any = users.find( u => u.email === user.email);
		console.log( authenticateUser );
		if( authenticateUser && authenticateUser.password === user.password){
			localStorage.setItem("user", authenticateUser.email);
			this._router.navigate(['home']);
			return true;
		}
		return false;
	}

	ckeckCredentials(){
		if ( localStorage.getItem('user') === null){
			this._router.navigate(['login']);
		}
	}

}