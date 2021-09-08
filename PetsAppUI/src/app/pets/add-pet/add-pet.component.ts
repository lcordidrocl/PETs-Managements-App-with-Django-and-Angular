import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PETsAPIService } from 'src/app/Shared/PETsAPI.service';
import { IPet } from '../models/IPet';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private petsApiService: PETsAPIService) { }

  @Output() newPetSuccessEvent = new EventEmitter<IPet>();

  newPet = new Pet();

  ngOnInit(): void {
  }

  onSubmit(){}

  AddPet()
  {
    this.petsApiService.addPet(this.newPet)
    .subscribe({
      next: data=> {
        this.newPet.name = "";
        this.newPet.age = 0;
        this.newPet.isAgeAproximated=false;
        this.newPetSuccessEvent.emit(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
