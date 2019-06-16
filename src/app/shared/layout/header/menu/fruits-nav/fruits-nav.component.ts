import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Category, Product } from '@goods/core/models';
import { HomepageService } from '@goods/core/services/homepage.service';

const ORGANIC_FRUIT = 3;
const SEASON_FRUIT = 5;
const EXOTICS_FRUIT = 6;

@Component({
  selector: 'goods-fruits-nav',
  templateUrl: './fruits-nav.component.html',
  styleUrls: ['./fruits-nav.component.scss']
})
export class FruitsNavComponent implements OnInit {

  public organic$: Observable<Product[]>;
  public season$: Observable<Product[]>;
  public exotics$: Observable<Product[]>;

  public organicCategory$: Observable<Category[]>;
  public seasonCategory$: Observable<Category[]>;
  public exoticsCategory$: Observable<Category[]>;

  constructor(private homepageService: HomepageService, private router: Router) { }

  ngOnInit() {
    this.organic$ = this.homepageService.getProductsByCategory(ORGANIC_FRUIT);
    this.season$ = this.homepageService.getProductsByCategory(SEASON_FRUIT);
    this.exotics$ = this.homepageService.getProductsByCategory(EXOTICS_FRUIT);

    this.organicCategory$ = this.homepageService.getOneCategory(ORGANIC_FRUIT);
    this.seasonCategory$ = this.homepageService.getOneCategory(SEASON_FRUIT),
      this.exoticsCategory$ = this.homepageService.getOneCategory(EXOTICS_FRUIT);
  }
  showProduct(product) {
    this.router.navigate(['brezza/products/', product.id]);
  }
}
