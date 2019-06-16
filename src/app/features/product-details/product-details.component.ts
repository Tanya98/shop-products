import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '@goods/store/models';
import { ProductDetailstService } from '@goods/core/services/product-details.service';
import { HomepageService } from '@goods/core/services/homepage.service';

import * as fromAction from '../../shared/layout/cart/store/actions/cart.action';

@Component({
  selector: 'goods-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public currentProduct$;
  constructor(
    private route: ActivatedRoute,
    private homepageService: HomepageService,
    private productDetailsService: ProductDetailstService,
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.homepageService.getNewProducts();
    this.homepageService.getNewCategories();
    this.productDetailsService.getAllProducts();

    this.route.paramMap.subscribe(params => {
      let productId: number = Number(params.get('id'));
      this.currentProduct$ = this.productDetailsService.getOneProduct(productId);
    });
  }

  addToCart(product) {
    this.store.dispatch(new fromAction.AddProductCart(product));
  }
}

