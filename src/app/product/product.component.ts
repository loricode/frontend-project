import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { ProductService } from '../services/product.service';

type Product = {
  id: string,
  name:string,
  price:number,
  description:string,
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products: Product[]  = []

  ngOnInit(): void {
    this.getListProducts()
  }

  constructor(private productService:ProductService){}
  
  
  private getListProducts = () => {

    this.productService.listProductsService().then(
      res => {
        if(res.status === 200){
          this.products = res.data;
        }
      }
    )

  }


}
