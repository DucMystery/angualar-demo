import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HEROES} from '../mock-Heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectHero: Hero;
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'

};

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

}
