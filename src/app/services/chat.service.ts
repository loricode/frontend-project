import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  apiPath = "http://127.0.0.1:8000/api/";

  constructor() { }

  public listPeopleService = async () => {

    const response = await axios.post(this.apiPath + "chat/list")

    return response;

  }


  public addPeopleChatService = async (obj:any) => {

    const response = await axios.post(this.apiPath + "chat/peopleAdd", obj)

    return response;

  }

  public listContactsService = async (objReq:any) => {

    const response = await axios.post(this.apiPath + "chat/listContacts", objReq)

    return response;

  }


}
