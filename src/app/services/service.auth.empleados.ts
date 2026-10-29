import { Injectable } from "@angular/core";
import { Component, computed, signal } from '@angular/core';
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleados{

    public user = signal<Empleado|null>(null);

    constructor(private _service: ServiceEmpleados){}
    async loginEmpleado(token: string): Promise<void> {
        sessionStorage.setItem("token", token);
        let empleado = await this._service.obtenerPerfil();
        this.user.set(empleado);
    }

    logoutEmpleado(): void{
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }
}