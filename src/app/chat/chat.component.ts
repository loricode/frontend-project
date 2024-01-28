import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

//service
import { ChatService } from '../services/chat.service';

//types
import { People } from '../interfaces/chat.interface';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatListModule, MatCheckboxModule, MatButtonModule, MatMenuModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  people: Array<People> = [];

  users = [
    { id: 1, name: 'Kristiyan' },
    { id: 2, name: 'Emiliyan' },
    { id: 3, name: 'Denitsa' },
  ];

  constructor(private chatService: ChatService){ }

  ngOnInit(): void {
    this.getListPeople();
    this.getListContacts();
  }

  private getListContacts = () => {

    const objReq = {
      userId: "65a0bad1ed8411e6ed046e73"
    }

    this.chatService.listContactsService(objReq).then(
      res => console.log(res.data)
    )

  }

  private getListPeople = () => {

    this.chatService.listPeopleService().then((res) => {

      const result = res.data.map((item:People) => ({...item, checked:false }))

      this.people = result

    })

  }

  public handleToggle = (id:string) => {

    let auxArray = [...this.people]

    const index = auxArray.findIndex(item => item.id === id)

    if(index < 0) return;

    let auxPeople = {...auxArray[index]}

    auxPeople.checked = !auxPeople.checked

    auxArray[index] = auxPeople

    this.people = auxArray

  }


  public saveNewChat = () => {

    const filtered = this.people.filter(item => item.checked === true)

    const result = filtered.map(item => ({ fullName:item.fullName, userId:item.id }))

    const objReq = {
      userId:"65a0bad1ed8411e6ed046e73",
      contacts: result 
    }

    this.chatService.addPeopleChatService(objReq).then((res) => {
      console.log(res)
    })

  }


}
