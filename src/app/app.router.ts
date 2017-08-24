import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


const appRouter : Routes = [
{
		path : "",
		// component : IndexComponent,
		redirectTo: 'index',
    pathMatch: 'full'
	},	
	{
		path : "index",
		component : IndexComponent
		// loadChildren : "app/index/index.module#IndexModule2"
	},{
		path : "login",
		component : LoginComponent
	},{
		path : "user",
		component : UserComponent
	},{
		path : "error",
		component : ErrorComponent
	}
]

@NgModule({
	imports : [
		RouterModule.forRoot(appRouter)
	],
	exports: [ RouterModule ]
})

export class AppRouter{ }
