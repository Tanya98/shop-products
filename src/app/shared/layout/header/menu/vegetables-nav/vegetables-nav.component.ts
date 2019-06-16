import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product, Category } from '@goods/core/models';
import { HomepageService } from '@goods/core/services/homepage.service';

const LEAF = 9;
const ROOT = 8;
const POD = 11;
const BULB = 10;

@Component({
  selector: 'goods-vegetables-nav',
  templateUrl: './vegetables-nav.component.html',
  styleUrls: ['./vegetables-nav.component.scss']
})
export class VegetablesNavComponent implements OnInit {

  public categories$;

  public leaf$: Observable<Product[]>;
  public root$: Observable<Product[]>;
  public pod$: Observable<Product[]>;
  public bulb$: Observable<Product[]>;

  public leafCategory$: Observable<Category[]>;
  public rootCategory$: Observable<Category[]>;
  public podCategory$: Observable<Category[]>;
  public bulbCategory$: Observable<Category[]>;

  constructor(private homepageService: HomepageService, private router: Router) { }

  ngOnInit() {
    this.categories$ = this.homepageService.categories$;
    this.leaf$ = this.homepageService.getProductsByCategory(LEAF);
    this.root$ = this.homepageService.getProductsByCategory(ROOT);
    this.pod$ = this.homepageService.getProductsByCategory(POD);
    this.bulb$ = this.homepageService.getProductsByCategory(BULB);

    this.leafCategory$ = this.homepageService.getOneCategory(LEAF);
    this.rootCategory$ = this.homepageService.getOneCategory(ROOT);
    this.podCategory$ = this.homepageService.getOneCategory(POD);
    this.bulbCategory$ = this.homepageService.getOneCategory(BULB);
  }
  showProduct(product) {
    this.router.navigate(['brezza/products/' + product.id]);
  }
}
