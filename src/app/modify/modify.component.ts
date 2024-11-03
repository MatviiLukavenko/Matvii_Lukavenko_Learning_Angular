import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Games } from './Games.ts';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  gameForm: FormGroup;
  isEditMode: boolean = false;
  gameTitle: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialize the reactive form
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      yearReleased: ['', Validators.required],
      productionCompany: ['', Validators.required],
      genre: ['', Validators.required],
      isActive: [true],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Check if we are in edit mode and retrieve the game details
    this.route.params.subscribe(params => {
      if (params['title']) {
        this.isEditMode = true;
        this.gameTitle = params['title'];
        this.loadGameData(this.gameTitle);
      }
    });
  }

  loadGameData(title: string): void {
    const game = this.dataService.getGames().find(g => g.title === title);
    if (game) {
      this.gameForm.patchValue(game);
    }
  }

  // Add or update a game
  onSubmit(): void {
    if (this.isEditMode) {
      const updatedGame: Games = { ...this.gameForm.value, title: this.gameTitle! };
      this.dataService.updateGame(updatedGame);
    } else {
      this.dataService.addGame(this.gameForm.value);
    }
    this.router.navigate(['/games']); // Redirect to the games list
  }
}
