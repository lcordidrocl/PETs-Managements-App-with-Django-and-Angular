import { Component, OnInit } from '@angular/core';
import { PetsApiService } from 'src/app/shared/services/pets-api.service';
import { IPet } from '../models/IPet';

@Component({
  selector: 'app-pets-management',
  templateUrl: './pets-management.component.html',
  styleUrls: ['./pets-management.component.css']
})
export class PetsManagementComponent implements OnInit {

  AddedPets: IPet[] = [];
  DeletedPets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  ngOnInit(): void {
  }

  succesAddedPet(pet: IPet)
  {
    this.AddedPets.push(pet);
  }

  successfullyDeletedPet(pet: IPet)
  {
    this.DeletedPets.push(pet);
  }
}
