import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal : ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador

  private _serviceAuthEmpleado : ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public usuario = this._serviceAuthEmpleado.user;


  constructor(
    private _router: Router
  ){}
  
  logOut() : void {
    this._serviceAuthEmpleado.logoutEmpleado();
    this._router.navigate(["/"])
  }
}
