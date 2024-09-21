import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Games } from "./Games";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Matvii-Lukavenko-Learning-Angular';
  name:string = 'Matvii Lukavenko';
  favFood:string = 'Pierogi';
}

const gamesArray: Games[] = [
  {
    title: 'The Legend of Zelda',
    yearReleased: 1986,
    productionCompany: 'Nintendo',
    genre: 'Action-adventure',
    isActive: true,
  },
  {
    title: 'Final Fantasy VII',
    yearReleased: 1997,
    productionCompany: 'Square Enix',
    genre: 'RPG',
  },
  {
    title: 'Halo: Combat Evolved',
    yearReleased: 2001,
    productionCompany: 'Bungie',
    genre: 'Shooter',
    isActive: false,
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    yearReleased: 2015,
    productionCompany: 'CD Projekt RED',
    genre: 'RPG',
  },
  {
    title: 'Minecraft',
    yearReleased: 2011,
    productionCompany: 'Mojang',
    genre: 'Sandbox',
    isActive: true,
  },
  {
    title: 'Among Us',
    yearReleased: 2018,
    productionCompany: 'Innersloth',
    genre: 'Party',
    isActive: true,
  }
];

