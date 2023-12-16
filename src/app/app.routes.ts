import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"auth",
    pathMatch:"full"
   },
   { 
     //lazy load carga peresosa de rutas
     path:'auth',
     loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
   },
   
];
