import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

export interface Games {
  title: string;
  yearReleased: number;
  productionCompany: string;
  genre: string;
  isActive?: boolean;
}
