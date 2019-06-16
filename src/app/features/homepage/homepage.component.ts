import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';
import * as _ from 'lodash';

import { Store } from '@ngrx/store';

import * as fromAction from '../../shared/layout/cart/store/actions/cart.action';
import { Router } from '@angular/router';
import { Product, Category } from '@goods/core/models';
import { State } from '@goods/store/models';
import { HomepageService } from '@goods/core/services/homepage.service';

const FRESH_MEAL_PRODUCTS_CATEGORY = 4;
const REGULAR_PRODUCTS_CATEGORY = 7;
const FEATURED_PRODUCTS_CATEGORY = 12;

@Component({
  selector: 'goods-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('text', [
      state('left', style({
        transform: 'translateX(80px)'
      })),
      transition('void <=> *', [
        animate('1s')
      ])
    ]),
  ]
})

export class HomepageComponent implements OnInit {

  public products$: Observable<Product[]>;
  public categories$: Observable<Category[]>;

  public productsByCategory$: Observable<Product[]>;
  public fresh$: Observable<Product[]>;
  public regular$: Observable<Product[]>;
  public featured$: Observable<Product[]>;

  public search;

  constructor(private homepageService: HomepageService,
    private store: Store<State>, private router: Router
  ) {
    this.categories$ = homepageService.categories$;
  }

  ngOnInit() {
    this.homepageService.getNewProducts();
    this.homepageService.getNewCategories();
    this.productsByCategory$ = this.homepageService.getProductsByCategory(FRESH_MEAL_PRODUCTS_CATEGORY);
    this.regular$ = this.homepageService.getProductsByCategory(REGULAR_PRODUCTS_CATEGORY);
    this.featured$ = this.homepageService.getProductsByCategory(FEATURED_PRODUCTS_CATEGORY);
  }

  changeType(id: number) {
    this.productsByCategory$ = this.homepageService.getProductsByCategory(id);
  }

  addToCart(product) {
    this.store.dispatch(new fromAction.AddProductCart(product));
  }

  showProduct(product) {
    this.router.navigate(['brezza/products/' + product.id]);
  }

  searchByName(event) {
    this.search = event.target.value;
  }
}
