import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Games } from './Games';
import { ContentListComponent } from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Matvii-Lukavenko-Learning-Angular';
  name: string = 'Matvii Lukavenko';
  favFood: string = 'Pierogi';

  gamesArray: Games[] = [
    {
      title: 'The Legend of Zelda',
      yearReleased: 1986,
      productionCompany: 'Nintendo',
      genre: 'Action-adventure',
      isActive: true,
      imageUrl: 'https://www.si.com/videogames/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk0NjI1MjA5NTU3NTkxNTc2/the-legend-of-zelda-nintendo-glhf-22.png',
    },
    {
      title: 'Final Fantasy VII',
      yearReleased: 1997,
      productionCompany: 'Square Enix',
      genre: 'RPG',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg',
    },
    {
      title: 'Halo: Combat Evolved',
      yearReleased: 2001,
      productionCompany: 'Bungie',
      genre: 'Shooter',
      isActive: false,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg',
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      yearReleased: 2015,
      productionCompany: 'CD Projekt RED',
      genre: 'RPG',
      isActive: true,
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0914/TvcIHkYqqln1RGbaFqBeuFp6.jpg',
    },
    {
      title: 'Minecraft',
      yearReleased: 2011,
      productionCompany: 'Mojang',
      genre: 'Sandbox',
      isActive: true,
      imageUrl: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_The-Wild-Update_1280x768.jpg',
    },
    {
      title: 'Among Us',
      yearReleased: 2018,
      productionCompany: 'Innersloth',
      genre: 'Party',
      isActive: true,
      imageUrl: 'https://i.ytimg.com/vi/0YKjFoGxbec/maxresdefault.jpg',
    }
  ];
}

