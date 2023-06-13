import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  shoppingcart: boolean = false;
  products: Product[] = [];

  constructor(private productservice: ProductService) {
    this.productservice = new ProductService()
  }

  ngOnInit(): void {
    this.productservice.getProducts().then(
      (data) => {
        console.log(data);
        this.products = data.slice(0, 5);
        //rest of the code

      }
  )}

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
}
