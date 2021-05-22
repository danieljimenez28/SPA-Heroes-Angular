import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'
import { Heroes } from '../../interfaces/IHeroes'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[] = [];

  constructor(
      private herServ: HeroesService
    , private myRouter: Router
    ) { }

  ngOnInit(): void {
    this.heroes = this.herServ.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(id:number){
    this.myRouter.navigate(['/heroe', id])
  }
}

