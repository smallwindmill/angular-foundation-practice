import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstModule } from './first/first.module';
// import { FirstComponent } from './first/first.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { IndexComponent } from './index.component';

import { IndexRouter } from './index.router';

@NgModule({
  declarations: [
    IndexComponent,
    // FirstComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    FirstModule,
    IndexRouter
  ],
  providers: []
})
export class IndexModule { }
