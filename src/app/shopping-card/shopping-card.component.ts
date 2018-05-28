import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  addedProducts = [];

  constructor() {
  }

  ngOnInit() {
    const that = this;

    if (localStorage.getItem('products')) {
      const localProducts = JSON.parse(localStorage.getItem('products'));

      if (localProducts.length) {
        that.addedProducts = localProducts;
      }
    }

  }

  remove(id) {
    const that = this;

    that.addedProducts.map((p, i) => {
      if (p.id === id) {
        that.addedProducts.splice(i, 1);
      }
    });

    localStorage.setItem('products', JSON.stringify(that.addedProducts));

  }

  calculatePrice() {
    let price;
    price = 0;

    this.addedProducts.map((e) => {
      price += e.price;
    });

    return price;
  }
}
