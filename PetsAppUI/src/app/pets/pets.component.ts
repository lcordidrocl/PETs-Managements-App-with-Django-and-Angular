import { Component, OnInit } from '@angular/core';
import { PetsApiService } from '../shared/services/pets-api.service';
import { IPet } from './models/IPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: IPet[] = [];

  constructor(private _petsApiService: PetsApiService) { }

  public ageSearchInput: number = 0;
  private _currentOffset: number = 0;

  ngOnInit(): void {
    this.getPets(this._currentOffset);
  }

  getPets(offset: number) {    
    this._petsApiService.getPets(offset)
      .subscribe(
        pets => { 
          this.Pets = pets;
        }
      );
  }

  //#region  Search
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
  //#endregion
  fetchNext()
  {
    this._currentOffset += this._petsApiService.limit; // update back to return count of items, validate upper limit
    this.getPets(this._currentOffset);
  }

  fetchPrevious()
  {
    if (this._currentOffset - this._petsApiService.limit > 0)
    {
      this._currentOffset -= this._petsApiService.limit;
    }
    else
    {
      this._currentOffset = 0;
    }
    this.getPets(this._currentOffset);
  }
}
