import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Heroes } from '../../interfaces/IHeroes'

@Component({
  selector: 'app-heroe-busc',
  templateUrl: './heroe-busc.component.html',
  styles: [
  ]
})
export class HeroeBuscComponent implements OnInit {

  heroes:Heroes[] = [];
  termino:string;
  constructor(
      private myHerServ: HeroesService
    , private myRouter:Router
    , private myActRouter: ActivatedRoute
  ) { 
    this.myActRouter.params.subscribe( par =>{
      // console.log(par['termino']);
      this.termino = par['termino'];
      this.heroes = myHerServ.buscarHeroes(par['termino']);
    });
  }

  ngOnInit(): void {
  }

  verHeroe(id:number){
    this.myRouter.navigate(['/heroe', id])
  }
}
