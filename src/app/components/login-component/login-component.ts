import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Credencial } from '../../models/credencial';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';


@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajacontrasenia") cajacontrasenia! : ElementRef;
  private _serviceAuthEmpleado : ServiceAuthEmpleados = inject(ServiceAuthEmpleados);

  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceEmpleados,
    private _router: Router,
  ){}
  async login(): Promise<void>{
    let nombre = this.cajaNombre.nativeElement.value;
    let pwd = this.cajacontrasenia.nativeElement.value;
    let credenciales = new Credencial(nombre, pwd)
    let response = await this._service.postLogin(credenciales)
    console.log(response);
    await this._serviceAuthEmpleado.loginEmpleado(response.response);
    this._router.navigate(["/miperfil"])

  }
}
