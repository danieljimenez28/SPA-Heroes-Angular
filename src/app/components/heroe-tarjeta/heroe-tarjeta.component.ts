import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { HeroesService } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() idx:number;
  
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(
    private myRouter:Router
  ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

   verHeroe(){
    //this.heroeSeleccionado.emit( this.idx );
      this.myRouter.navigate(['/heroe', this.idx])
   }
}
