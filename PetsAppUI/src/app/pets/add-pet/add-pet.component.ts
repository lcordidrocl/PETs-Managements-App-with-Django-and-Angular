import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PETsAPIService } from 'src/app/Shared/PETsAPI.service';
import { IPet } from '../models/IPet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private petsApiService: PETsAPIService) { }

  @Output() newPetSuccessEvent = new EventEmitter<IPet>();

  Name: string = "";
  Age: number = 0;
  IsAgeAproximated: boolean = false;


  ngOnInit(): void {
  }

  AddPet()
  {
    var newPet = 
    {
      Id: 0,
      Name: this.Name,
      Age: this.Age,
      IsAgeAproximated: this.IsAgeAproximated
    }
    
    this.petsApiService.addPet(newPet)
    .subscribe({
      next: data=> {
        this.Name = "";
        this.Age = 0;
        this.IsAgeAproximated = false;
        this.newPetSuccessEvent.emit(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
