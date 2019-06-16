import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[goodsCarousel]'
})
export class CarouselDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
