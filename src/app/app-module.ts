import { NgModule, provideBrowserGlobalErrorListeners, Service } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login-component/login-component';
import { MiperfilComponent } from './components/miperfil-component/miperfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEmpleados } from './services/service.empleados';
import { AuthGuard } from './guards/auth-guard';
import { SignalComponent } from './components/signal-component/signal-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    MiperfilComponent,
    SubordinadosComponent,
    MenuComponent,
    SignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleados,
    AuthGuard,
  ],
  bootstrap: [App],
})
export class AppModule {}
