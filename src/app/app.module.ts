import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IndexModule } from './index/index.module';
import { FirstModule } from './index/first/first.module';

// import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { UserComponent  } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';

import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    IndexModule,
    FirstModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
