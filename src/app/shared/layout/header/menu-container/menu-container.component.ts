import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'goods-menu-container',
  templateUrl: './menu-container.component.html',
})
export class MenuContainerComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }
}
