import { Component, OnInit } from '@angular/core';
import { PetsApiService } from '../shared/services/pets-api.service';
import { YearsToNowPipe } from '../shared/pipes/years-to-now.pipe';
import { IPet } from './models/IPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  public ageSearchInput: number = 0;

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this._petsApiService.getPets()
      .subscribe(
        pets => { 
          this.Pets = pets;
        }
      );
  }

  searchByName(name: string){
    this._petsApiService.getPetsByName(name)
    .subscribe({
      next: data =>
      {
        this.Pets = data;
      },
      error: error => {
        console.error(error);
      }
    })
  }
  
  searchByAge(){
    this._petsApiService.getPetsByAge(this.ageSearchInput)
    .subscribe({
      next: data =>
      {
        this.Pets = data;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  deletePet(id: number) {
    this._petsApiService.deletePet(id)
    .subscribe({
      next: data => {
        this.Pets = this.Pets.filter(pet => pet.id != id);
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
