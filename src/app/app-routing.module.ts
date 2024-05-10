import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { WifiConfigComponent } from './wifi-config/wifi-config.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dash', component: DashComponent, children:[
    {
      path: 'wifi-config', component: WifiConfigComponent
    }
  ]    
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
