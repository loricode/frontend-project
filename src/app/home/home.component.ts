import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgFor, NgForOf} from "@angular/common";

//types
import { Notification } from '../interfaces/notification.interface';

//service
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  notificationForm = this.formBuilder.group({
    'description': [""],
    'due_date': [new Date(),]
  })

  notificacionList: Notification[] = [];

  constructor(
    private notificationService :NotificationService,
    private formBuilder: FormBuilder){}
  
    ngOnInit(): void {
      this.listNotification();
    }

    zeroPad = (num:number, places:number) => String(num).padStart(places, '0');


  public addNotification = () => {
    
    let { description, due_date } = this.notificationForm.value 
   
    if(due_date === null || due_date === undefined ) return 

    let objReq = { due_date: "", description:description }

    let dataAc = new Date()

    let hora =  dataAc.getHours();

    let min = dataAc.getMinutes()

    let seg = dataAc.getSeconds()
   
    let date = due_date.toLocaleDateString("en-GB").replaceAll("/", "-")

    objReq["due_date"] = date+"T"+this.zeroPad(hora, 2) + ":" + this.zeroPad(min, 2) + ":"+ seg

    this.notificationService.addNotificationService(objReq)

  }

  restarTiempo(fechaInicial:Date, fechaFinal:Date) {
    var diff = fechaFinal.getTime() - fechaInicial.getTime();
    console.log(diff)
    var segundos = Math.floor(diff / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
  
    segundos %= 60;
    minutos %= 60;
  
    return {
      horas: horas,
      minutos: minutos,
      segundos: segundos
    };
  }

  public listNotification = () => {

    this.notificationService.listNotificationService().then((res:any) => {
     

       const result = res.data.map((item: Notification) => {
           
            var diferenciaHoras = this.restarTiempo(new Date(item.currentDate), new Date())

            let valores = Object.values(diferenciaHoras)
            let llaves = Object.keys(diferenciaHoras)

            let elapsedTime = "";
            for(let i = 0; i < valores.length; i++){

              if(valores[i] > 0){
                console.log(llaves[i])
                elapsedTime = valores[i] + " " + llaves[i]
                break;
              }


            }
          
            return { ...item, elapsedTime  }

      
          })

      // Calcula la diferencia en milisegundos

      // Convierte la diferencia a horas
   

     
      this.notificacionList = result;
    })

  } 

  mostrarHora = () => {



  }


}
