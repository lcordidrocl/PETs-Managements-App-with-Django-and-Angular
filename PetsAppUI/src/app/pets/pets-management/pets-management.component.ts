import { Component, OnInit } from '@angular/core';
import { PetsApiService } from 'src/app/shared/services/pets-api.service';
import { IPet } from '../models/IPet';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-pets-management',
  templateUrl: './pets-management.component.html',
  styleUrls: ['./pets-management.component.css']
})
export class PetsManagementComponent implements OnInit {

  Pets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  ngOnInit(): void {
  }

  succesAddedPet(pet: IPet)
  {
    this.Pets.push(pet);
  }
}
