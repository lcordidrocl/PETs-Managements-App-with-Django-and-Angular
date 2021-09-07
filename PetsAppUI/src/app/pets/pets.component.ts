import { Component, OnInit } from '@angular/core';
import { PETsAPIService } from '../Shared/PETsAPI.service';
import { IPet } from './models/IPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: IPet[] = [];
  constructor(private petsApiService: PETsAPIService) { }

  ngOnInit(): void {
    this.getPets();
  }

  closeAddPetClick() {
    this.getPets();
  }

  getPets() {
    this.petsApiService.getPets()
      .subscribe(
        pets => {
          this.Pets = pets
        }
      );
  }

  deletePet(id: number) {
    this.petsApiService.deletePet(id)
    .subscribe({
      next: data => {
        this.Pets = this.Pets.filter(pet => pet.Id != id);
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
