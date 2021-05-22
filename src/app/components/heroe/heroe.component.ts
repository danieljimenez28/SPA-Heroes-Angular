import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe_Idx:string;
  heroe:any = {};

  chowDC:boolean = false;
  chowMarvel:boolean = false;

  constructor(
      private actRoute:ActivatedRoute
    , private herServ:HeroesService
  ) { 
    this.actRoute.params.subscribe(myPar =>{
      this.heroe_Idx = myPar['id'];
      this.heroe = this.herServ.getHeroe(this.heroe_Idx);
      if(this.heroe.casa == 'DC')
      {
        // console.log('Soy de DC');
        this.chowDC = true;
        this.chowMarvel = false;
      }
      else{
        // console.log('Soy de Marvel');
        this.chowDC = false;
        this.chowMarvel = true;
      }
      // console.log(this.heroe);
      // console.log(this.heroe_Idx);
    })
  }
  
  getHeroe(){

  }
}
