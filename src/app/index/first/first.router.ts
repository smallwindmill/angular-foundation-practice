import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../index.component';
import { FirstComponent } from './first.component';

import { FirstAComponent } from './first-a/first-a.component';
import { FirstBComponent } from './first-b/first-b.component';

    const firstRoutes: Routes = [ 
        /*{
            path: "first",
            component: FirstComponent,
              children: [
              {
                path : '',
                redirectTo: 'firsta',
                pathMatch: 'full'
              }, 
               {
                path : "firsta",
                component: FirstAComponent
              },{
                path : "firstb",
                component : FirstBComponent
              }
            ]
        },*/
        {
          path : "index",
          component : IndexComponent, 
          children: [
            {
              path : "",
              redirectTo: 'first',
              pathMatch: 'full'
            },
            {
              path: "first",
              component: FirstComponent,
                children: [
                 {
                  path : "firsta",
                  component: FirstAComponent
                },{
                  path : "firstb",
                  component : FirstBComponent
                },{
                  path : "",
                  redirectTo: 'firsta',
                  pathMatch: 'full'
                } 
              ]
            }
          ]
        }

    ]
    // console.log(firstRoutes);
     
    @NgModule({
      imports: [ RouterModule.forRoot(firstRoutes) ],
      exports: [ RouterModule ]
    })
    export class FirstRouter {}