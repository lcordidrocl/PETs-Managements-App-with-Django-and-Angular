import { Component, OnInit } from '@angular/core';
import { PETsAPIService } from '../Shared/PETsAPI.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: any = [];

  NewPet: any;
  ActivateAddPet: boolean = false;

  constructor(private petsApiService: PETsAPIService) { }

  ngOnInit(): void {
    this.getPets();
  }

  addPetClick()
  {
    this.NewPet =
    {
      Id: 0,
      Name: "",
      Age: 0
    }
    this.ActivateAddPet = true;
  }

  closeAddPetClick()
  {
    this.ActivateAddPet = false;
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
}
