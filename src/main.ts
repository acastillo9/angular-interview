import 'zone.js/dist/zone';
import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'product-list',
  template: `
    <ul>
      <li *ngFor="let product of products;">{{product}}</li>
    </ul>
  `,
})
export class ProductList {
  products = [];

  constructor(productService: ProductService) {
    this.products = productService.products;
  }
}

@Injectable()
export class ProductService {
  products = ['computer', 'bicicle', 'refrigerator'];
}

@NgModule({
  declarations: [ProductList],
  exports: [ProductList],
  imports: [CommonModule],
  providers: [ProductService],
})
export class ProductsModule {}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ProductsModule],
  template: `
    <h1>Productos</h1>
    <product-list />
  `,
})
export class App {}

bootstrapApplication(App);
