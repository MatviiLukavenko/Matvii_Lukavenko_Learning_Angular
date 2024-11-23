import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {ShowDetailsOnHoverDirective} from "../directives/show-details-on-hover.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  templateUrl: './modify-list-item.component.html',
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    ShowDetailsOnHoverDirective
  ],
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  gameForm: FormGroup; // Fixed error by initializing in constructor
  isEditMode: boolean = false; // Fixed error by assigning a default value

  constructor(private fb: FormBuilder) {
    // Initialize the FormGroup
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
    // Example: Preload data for edit mode if necessary
    if (this.isEditMode) {
      this.loadGameData();
    }
  }

  // Mock function to load game data for edit mode
  games: any;
  loadGameData(): void {
    const mockGameData = {
      title: 'Example Game',
      yearReleased: '2022',
      productionCompany: 'Example Studios',
      genre: 'Adventure',
      isActive: true,
      imageUrl: 'https://example.com/image.png'
    };
    this.gameForm.patchValue(mockGameData);
  }

  onSubmit(): void {
    if (this.gameForm.valid) {
      const formData = this.gameForm.value;
      console.log('Form submitted:', formData);
      // Logic for adding or updating a game
    } else {
      console.error('Form is invalid!');
    }
  }
}
