    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    import { FirstComponent } from './first/first.component';
    import { TwoComponent }   from './two/two.component';
    import { ThreeComponent } from './three/three.component';

    import { IndexComponent } from './index.component';
     
    const indexRoutes: Routes = [ 
        {
          path : "index",
          component : IndexComponent,             
          children: [
          {
            path : "first",
            component: FirstComponent
          },{
            path : "two",
            component : TwoComponent
          },{
            path : "three",
            component : ThreeComponent
          },{
            path : "",
            // component : FirstComponent, 
            redirectTo: 'first',
            pathMatch: 'full'
          } 
        ]
      }
     /* {
        path : "index/first",
        component: FirstComponent
      },{
        path : "index/two",
        component : TwoComponent
      },{
        path : "index/three",
        component : ThreeComponent
      },{
      path : "",
      // component : FirstComponent, 
      redirectTo: 'first',
      pathMatch: 'full'
      } */
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(indexRoutes) ],
      exports: [ RouterModule ]
    })
    export class IndexRouter {}