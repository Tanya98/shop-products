import { Injectable } from '@angular/core';
import { Category, Product } from '@goods/core/models';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const _categories: Category[] = [
      {
        id: 1,
        name: "fruit"
      },
      {
        id: 2,
        name: "vegetables"
      },
      {
        id: 3,
        name: "organic fruit"
      },
      {
        id: 4,
        name: "fresh meal"
      },
      {
        id: 5,
        name: "season fruit"
      },
      {
        id: 6,
        name: "exotics fruit"
      },
      {
        id: 7,
        name: "regular"
      },
      {
        id: 8,
        name: "root"
      },
      {
        id: 9,
        name: "leaf"
      },
      {
        id: 10,
        name: "bulb"
      },
      {
        id: 11,
        name: "pod"
      },
      {
        id: 12,
        name: "featured"
      }
    ];
    const _products: Product[] = [

      {
        id: 1,
        name: "apple",
        img: "../../assets/images/apple.jpg",
        availability: "in stock",
        price: 15,
        category: [
          1,
          7
        ]
      },
      {
        id: 2,
        name: "green-grapes",
        img: "../../assets/images/green-grapes.jpg",
        availability: "in supermarket",
        price: 15,
        category: [
          1,
          7,
          4
        ]
      },
      {
        id: 3,
        name: "watermelon",
        img: "../../assets/images/watermelon.jpg",
        availability: "in stock",
        price: 18,
        category: [
          1,
          5,
          12
        ]
      },
      {
        id: 4,
        name: "mango",
        img: "../../assets/images/mango.jpg",
        availability: "in stock",
        price: 22,
        category: [
          1,
          5,
          6,
          12
        ]
      },
      {
        id: 5,
        name: "orange",
        img: "../../assets/images/orange.jpg",
        availability: "in supermarket",
        price: 25,
        category: [
          1,
          3,
          7,
          12
        ]
      },
      {
        id: 6,
        name: "banana",
        img: "../../assets/images/bananas.jpg",
        availability: "in stock",
        price: 20,
        category: [
          1,
          3
        ]
      },
      {
        id: 7,
        name: "cherry",
        img: "../../assets/images/cherry.jpg",
        availability: "in stock",
        price: 24,
        category: [
          1,
          3,
          4,
          12
        ]
      },
      {
        id: 8,
        name: "grapes",
        img: "../../assets/images/grapes.jpg",
        availability: "in supermarket",
        price: 25,
        category: [
          1,
          3,
          6
        ]
      },
      {
        id: 9,
        name: "kiwi",
        img: "../../assets/images/kiwi.jpg",
        availability: "in stock",
        price: 25,
        category: [
          1,
          4,
          12
        ]
      },
      {
        id: 10,
        name: "blue-grapes",
        img: "../../assets/images/blue-grapes.jpg",
        availability: "in stock",
        price: 21,
        category: [
          1,
          3,
          6
        ]
      },
      {
        id: 11,
        name: "pineapple",
        img: "../../assets/images/pineapple.jpg",
        availability: "in supermarket",
        price: 25,
        category: [
          1,
          6
        ]
      },
      {
        id: 13,
        name: "avocado",
        img: "../../assets/images/avocado.jpg",
        availability: "in supermarket",
        price: 12,
        category: [
          1,
          12,
          11
        ]
      },
      {
        id: 14,
        name: "carrot",
        img: "../../assets/images/carot.jpg",
        availability: "in supermarket",
        price: 10,
        category: [
          2,
          8,
          7
        ]
      },
      {
        id: 15,
        name: "onion",
        img: "../../assets/images/onion.jpg",
        availability: "in stock",
        price: 13,
        category: [
          2,
          4,
          7
        ],
      },
      {
        id: 16,
        name: "green cabage",
        img: "../../assets/images/green-cabage.jpg",
        availability: "in supermarket",
        price: 14,
        category: [
          2,
          9,
          7
        ]
      },
      {
        id: 17,
        name: "red cabage",
        img: "../../assets/images/cabage.jpg",
        availability: "in supermarket",
        price: 16,
        category: [
          2,
          9
        ]
      },
      {
        id: 18,
        name: "broccoli",
        img: "../../assets/images/broccoli.jpg",
        availability: "in supermarket",
        price: 22,
        category: [
          2,
          10,
          12
        ]
      },
      {
        id: 19,
        name: "zucchini",
        img: "../../assets/images/zucchini.jpg",
        availability: "in stock",
        price: 14,
        category: [
          2,
          11,
          7
        ]
      },
      {
        id: 20,
        name: "peper",
        img: "../../assets/images/peper.jpg",
        availability: "in supermarket",
        price: 18,
        category: [
          2,
          10,
          7
        ]
      },
      {
        id: 21,
        name: "radish",
        img: "../../assets/images/radish.jpg",
        availability: "in supermarket",
        price: 10,
        category: [
          2,
          8,
          7
        ]
      },
      {
        id: 22,
        name: 'garnet',
        img: '../../assets/images/garnet.jpg',
        availability: 'in stock',
        price: 21,
        category: [
          1,
          5,
          12
        ]
      },
      {
        id: 23,
        name: "papaya",
        img: "../../assets/images/papaya.jpg",
        availability: "in supermarket",
        price: 22,
        category: [
          1,
          5
        ]
      }
    ]
    return { categories: _categories, products: _products }
  }
}


