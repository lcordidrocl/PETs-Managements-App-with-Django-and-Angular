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

  AddPet()
  {
    var newPet = 
    {
      Id: 0,
      Name: this.newPet.Name,
      Age: this.newPet.Age,
      IsAgeAproximated: this.newPet.IsAgeAproximated
    }
    
    this.petsApiService.addPet(newPet)
    .subscribe({
      next: data=> {
        this.newPet = new Pet();
        this.newPetSuccessEvent.emit(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
