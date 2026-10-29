import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-signal-component',
  standalone: false,
  styleUrl: './signal-component.css',
  templateUrl: './signal-component.html',
})
export class SignalComponent {
  private _serviceSignal : ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble

  reiniciarcontador(): void{
    this._serviceSignal.reiniciarcontador()
  }
  incrementar(): void{
    this._serviceSignal.incrementar()
  }
}
