import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'goods-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isSticky: boolean = false;
  public header = '../assets/images/top-strip.jpg';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
}
