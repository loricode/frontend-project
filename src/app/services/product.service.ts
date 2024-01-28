import { Injectable } from '@angular/core';
import axios from 'axios';

type Response = {
    data:Array<{ id:string, name:string, price:number, description:string  }>,
    status:number
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiPath = "http://127.0.0.1:8000/api/";

  constructor() { }

  public listProductsService = async (): Promise<Response> => {

    const response = await axios.get(this.apiPath + "products")

    return response;

  }

}
