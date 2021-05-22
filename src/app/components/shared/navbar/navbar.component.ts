import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private myRouter:Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string)
  {
    this.myRouter.navigate(['/heroes-busqueda', termino]);
  }

}
