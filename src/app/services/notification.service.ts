import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiPath = "http://127.0.0.1:8000/api/";

  constructor() { }

  public listNotificationService = async () => {

    const response = await axios.post(this.apiPath + "notification/list")

    return response;

  }

  public addNotificationService = async (obj:any) => {

    const response = await axios.post(this.apiPath + "notification/add", obj)

    return response; 
  }

}
