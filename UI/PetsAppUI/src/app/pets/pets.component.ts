import { Component, OnInit } from '@angular/core';
import { PETsAPIService } from '../Shared/PETsAPI.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  Pets: any = [];

  constructor(private petsApiService: PETsAPIService) { }

  ngOnInit(): void {
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
