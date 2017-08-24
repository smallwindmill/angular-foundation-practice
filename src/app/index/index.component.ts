import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {




  constructor() {
  }



  ngOnInit() {
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}