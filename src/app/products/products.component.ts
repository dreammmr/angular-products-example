import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  addedProducts = [];

  constructor() {
  }

  ngOnInit() {
    const that = this;

    for (let i = 0; i < 20; i++) {
      const p = {
        id: i,
        title: 'iPhone X',
        price: 900,
        img: 'https://avatars.mds.yandex.net/get-mpic/331398/img_id1336600343153179756.png/9hq',
        inCard: false
      };

      that.products.push(p);
    }

    if (localStorage.getItem('products')) {
      const localProducts = JSON.parse(localStorage.getItem('products'));

      if (localProducts.length) {
        that.addedProducts = localProducts;

        that.addedProducts.forEach((added) => {
          that.products.forEach((prods) => {
            if (added.id === prods.id) {
              prods.inCard = true;
            }
          });
        });
      }
    }

  }

  add(id) {
    const that = this;
    that.products.map((e) => {
      if (e.id === id) {
        e.inCard = true;
        that.addedProducts.push(e);

        localStorage.setItem('products', JSON.stringify(that.addedProducts));
      }
    });
  }

  remove(id) {
    const that = this;
    that.products.map((e) => {
      if (e.id === id) {
        e.inCard = false;

        that.addedProducts.map((p, i) => {
          if (p.id === id) {
            that.addedProducts.splice(i, 1);
          }
        });

        localStorage.setItem('products', JSON.stringify(that.addedProducts));
      }
    });
  }

}
