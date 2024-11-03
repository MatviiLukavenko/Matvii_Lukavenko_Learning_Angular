import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Games } from './Games';
import { MOCK_GAMES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private games: Games[] = MOCK_GAMES;
  private gamesSubject = new BehaviorSubject<Games[]>(this.games);

  constructor() {}

  // Retrieve all items
  getGames(): Observable<Games[]> {
    return this.gamesSubject.asObservable();
  }

  // Add a new item
  addGame(game: Games): void {
    this.games.push(game);
    this.updateGames();
  }

  // Update an existing item
  updateGame(updatedGame: Games): void {
    const index = this.games.findIndex(game => game.title === updatedGame.title);
    if (index !== -1) {
      this.games[index] = updatedGame;
      this.updateGames();
    }
  }

  // Delete an item
  deleteGame(title: string): void {
    this.games = this.games.filter(game => game.title !== title);
    this.updateGames();
  }

  // Helper function to emit the updated games list
  private updateGames(): void {
    this.gamesSubject.next(this.games);
  }
}
