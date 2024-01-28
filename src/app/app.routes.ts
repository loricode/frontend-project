import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"product",
    pathMatch:"full"
   },
   {
    path:"product",
    component: ProductComponent
   },
   {
     path:"home",
     component: HomeComponent
   },
   {
    path:"chat",
    component: ChatComponent
   },
   { 
     //lazy load carga peresosa de rutas
     path:'auth',
     loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
   },
   
];
