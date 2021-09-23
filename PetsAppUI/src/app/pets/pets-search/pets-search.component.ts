import { Component, OnInit } from '@angular/core';
import { PetsApiService } from 'src/app/shared/services/pets-api.service';
import { IPet } from '../models/IPet';


@Component({
  selector: 'app-pets-search',
  templateUrl: './pets-search.component.html',
  styleUrls: ['./pets-search.component.css']
})
export class PetsSearchComponent implements OnInit {

  Pets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  public ageSearchInput: number = 0;

  ngOnInit(): void {  }

  searchByName(name: string){
    this._petsApiService.getPetsByName(name)
    .subscribe({
      next: data =>
      {
        this.Pets = data;
      },
      error: error => {
        console.error(error);
      }
    })
  }
  
  searchByAge(){
    this._petsApiService.getPetsByAge(this.ageSearchInput)
    .subscribe({
      next: data =>
      {
        this.Pets = data;
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
