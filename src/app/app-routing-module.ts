import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { MiperfilComponent } from './components/miperfil-component/miperfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  {path:"", component : LoginComponent},
  {path:"miperfil", component : MiperfilComponent},
  {path:"subordinados", component : SubordinadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
