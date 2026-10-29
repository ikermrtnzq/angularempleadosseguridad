import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  constructor(
    private _router: Router
  ){}
  
  logOut() : void {
    sessionStorage.removeItem("token");
    this._router.navigate(["/"])
  }
}
