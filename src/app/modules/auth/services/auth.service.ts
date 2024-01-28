import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login = () => {

   return new Promise(( resolve, reject) => {

    resolve({r:"gg"})

   })

  }

}
