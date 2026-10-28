import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-miperfil-component',
  standalone: false,
  styleUrl: './miperfil-component.css',
  templateUrl: './miperfil-component.html',
})
export class MiperfilComponent implements OnInit {
  public perfil! : Empleado
  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceEmpleados,
    private _router: Router
  ){}
  async ngOnInit(): Promise<void> {
    this.perfil = await this._service.obtenerPerfil();
    this._cdr.detectChanges()
  }
}
