import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsApiService } from '../../shared/services/pets-api.service';
import { IPet } from '../models/IPet';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css']
})

export class DeletePetComponent implements OnInit {

  deletePet = new Pet();
  birthDate: Date = new Date();

  constructor(private _petsApiService: PetsApiService, private datePipe: DatePipe) { }

  @Output() deletePetSuccessEvent = new EventEmitter<IPet>();

  ngOnInit(): void {
  }

  DeletePet()
  {
    // format date to the date formate the API accepts
    var formatedAgeDate = this.datePipe.transform(this.birthDate, 'yyyy-MM-dd');
    if(formatedAgeDate)
    {
      this.deletePet.birthDate = formatedAgeDate;
    }
    this._petsApiService.deletePet(19)
    .subscribe({
      next: data=> {
        this.deletePetSuccessEvent.emit(data);
        this.deletePet = new Pet();
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
