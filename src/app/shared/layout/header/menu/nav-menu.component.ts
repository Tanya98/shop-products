import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'goods-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
})

export class NavMenuComponent {
    isSticky: boolean = false;
    public template: any;

    @ViewChild('vegetables') vegetables: TemplateRef<any>;
    @ViewChild('fruits') fruits: TemplateRef<any>;
    @ViewChild('custom') custom: TemplateRef<any>;

    // @Output() searchProduct = new EventEmitter();

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        this.isSticky = window.pageYOffset >= 50;
    }

    onNavigationHover(str: string) {
        switch (str) {
            case 'vegetables': {
                this.template = this.vegetables;
                break;
            }
            case 'fruits': {
                this.template = this.fruits;
                break;
            }
            case 'custom': {
                this.template = this.custom;
                break;
            }
        }
    }

    onNavigationOut(str: string) {
        switch (str) {
            case 'vegetables': {
                this.template = null;
                break;
            }
            case 'fruits': {
                this.template = null;
                break;
            }
            case 'custom': {
                this.template = null;
                break;
            }
        }
    }
}
