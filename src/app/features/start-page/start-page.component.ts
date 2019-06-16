import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goods-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  public bg = '../assets/images/bg.jpg';
  constructor() { }

  ngOnInit() {

  }
}
