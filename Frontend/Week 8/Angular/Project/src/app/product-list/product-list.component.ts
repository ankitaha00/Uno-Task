import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Products = [
    {name : 'IFhone 15 Pro Max', description : 'Advanced A17 Pro chip, 48MP camera, titanium design, and long-lasting battery.'},
    {name : 'IFhone 15 Pro', description : 'Dynamic Island, 48MP camera, A17 Pro chip, and Always-On display.'},
    {name : 'IFhone 15'}
  ];

  buy(product: { name: any; }) {
    alert(`You can buy your ${product.name} from www.apple.com`);
  }

}
