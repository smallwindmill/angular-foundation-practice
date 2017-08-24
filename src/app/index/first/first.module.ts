import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { FirstComponent } from './first.component';

import { FirstAComponent } from './first-a/first-a.component';
import { FirstBComponent } from './first-b/first-b.component';

import { FirstRouter } from './first.router'

@NgModule({
  imports: [
    BrowserModule,
    FirstRouter
    // CommonModule
  ],
  declarations: [
    FirstComponent,
    FirstAComponent,
    FirstBComponent,
  ]
})
export class FirstModule { }
