import { Component } from '@angular/core';
import { Router } from '@angular/router';

 declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }



  ngOnInit() {
    $(document).ready(function() {
      $(document).foundation();
    })
    $('.top-bar-section li').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  }

 

}
