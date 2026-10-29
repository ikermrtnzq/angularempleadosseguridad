import { Injectable } from "@angular/core";
import { Component, computed, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceSignal{
    public contador = signal(0);
    public doble = computed(()=>{
        return this.contador()*2
    })

    reiniciarcontador(): void{
        this.contador.set(0);
    }
    incrementar(): void{
        this.contador.update(value => value+1);
    }
}