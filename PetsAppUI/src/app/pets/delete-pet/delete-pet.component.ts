import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetsApiService } from '../../shared/services/pets-api.service';
import { IPet } from '../models/IPet';

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css']
})

export class DeletePetComponent implements OnInit {

  deletePetName: string ="";
  deletePetBirthdate: Date = new Date();
  deleteExistingPets: IPet[]=[];

  constructor(private _petsApiService: PetsApiService, private datePipe: DatePipe) { }

  @Output() deletePetSuccessEvent = new EventEmitter<IPet>();

  ngOnInit(): void {
  }

  getPetsByNameAndBirthdate()
  {
    // format date to the date formate the API accepts
    var formatedAgeDate = this.datePipe.transform(this.deletePetBirthdate, 'yyyy-MM-dd');
    if(formatedAgeDate)
    {
      this._petsApiService.getPetsByNameAndBirthdate(this.deletePetName, formatedAgeDate)
      .subscribe({
        next: data=> {
          this.deleteExistingPets = data;
        },
        error: error => {
          console.error(error);
        }
      });
      
    }
  }
  
  deletePet(id: number)
  {
    this._petsApiService.deletePet(id)
    .subscribe({
      next: data=> {
        this.deletePetSuccessEvent.emit(data);
        this.deleteExistingPets = this.deleteExistingPets.filter(pet=>pet.id !=id);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
