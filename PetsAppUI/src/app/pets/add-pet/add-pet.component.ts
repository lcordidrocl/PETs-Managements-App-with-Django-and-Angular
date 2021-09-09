import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsApiService } from '../../shared/pets-api.service';
import { IPet } from '../models/IPet';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private _petsApiService: PetsApiService) { }

  @Output() newPetSuccessEvent = new EventEmitter<IPet>();

  newPet = new Pet();

  ngOnInit(): void {
  }

  AddPet()
  {
    this._petsApiService.addPet(this.newPet)
    .subscribe({
      next: data=> {
        this.newPet.name = "";
        this.newPet.age = new Date();
        this.newPet.isAgeAproximated=false;
        this.newPetSuccessEvent.emit(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
