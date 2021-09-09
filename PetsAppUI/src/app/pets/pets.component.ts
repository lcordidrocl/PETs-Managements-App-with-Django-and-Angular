import { Component, OnInit } from '@angular/core';
import { PetsApiService } from '../shared/pets-api.service';
import { YearsToNowPipe } from '../shared/pipes/years-to-now.pipe';
import { IPet } from './models/IPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: IPet[] = [];
  FilteredPets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  private _nameFilter: string = "";
  get nameFilter(): string
  {
    return this._nameFilter;
  }
  set nameFilter(value: string)
  {
    this._nameFilter = value;
    this.FilteredPets = this.Pets.filter(pet => pet.name.toLowerCase().indexOf(value.toLowerCase())!==-1);
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this._petsApiService.getPets()
      .subscribe(
        pets => { 
          this.Pets = pets;
          this.FilteredPets = pets;
        }
      );
  }

  deletePet(id: number) {
    this._petsApiService.deletePet(id)
    .subscribe({
      next: data => {
        this.Pets = this.Pets.filter(pet => pet.id != id);
        this.FilteredPets = this.FilteredPets.filter(pet => pet.id != id);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  succesAddedPet(pet: IPet)
  {
    this.Pets.push(pet);
  }
}
