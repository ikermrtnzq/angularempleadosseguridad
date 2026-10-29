import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { MiperfilComponent } from './components/miperfil-component/miperfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { AuthGuard } from './guards/auth-guard';
import { SignalComponent } from './components/signal-component/signal-component';

const routes: Routes = [
  {path:"", component : LoginComponent},
  {path:"miperfil", component : MiperfilComponent ,canActivate:[AuthGuard]},
  {path:"subordinados", component : SubordinadosComponent, canActivate: [AuthGuard]},
  {path:"signal", component : SignalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
