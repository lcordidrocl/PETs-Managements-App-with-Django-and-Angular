import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsApiService } from '../../shared/pets-api.service';
import { IPet } from '../models/IPet';
import { Pet } from '../models/Pet';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private _petsApiService: PetsApiService, private datePipe: DatePipe) { }

  @Output() newPetSuccessEvent = new EventEmitter<IPet>();

  newPet = new Pet();
  petAge: Date = new Date();

  ngOnInit(): void {
  }

  AddPet()
  {
    // format date to the date formate the API accepts
    var formatedAgeDate = this.datePipe.transform(this.petAge, 'yyyy-MM-dd');
    if(formatedAgeDate)
    {
      this.newPet.age = formatedAgeDate;
    }
    this._petsApiService.addPet(this.newPet)
    .subscribe({
      next: data=> {
        this.newPetSuccessEvent.emit(data);
        this.newPet = new Pet();
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
