import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Credencial } from "../models/credencial";

@Injectable()

export class ServiceEmpleados{
    url  = environment.url;
    constructor(
        private _http : HttpClient
    ){}

    async postLogin(credenciales : Credencial): Promise<any>{
        let endpoint = "auth/login";
        let json = JSON.stringify(credenciales);
        let header = new HttpHeaders().set("content-type","application/json");
        return firstValueFrom(
            this._http.post(this.url+endpoint, json, {headers: header})
        )
    }
}