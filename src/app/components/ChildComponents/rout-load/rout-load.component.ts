import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rout-load',
  templateUrl: './rout-load.component.html',
  styleUrls: ['./rout-load.component.scss']
})
export class RoutLoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('i am inited');
  }

}
