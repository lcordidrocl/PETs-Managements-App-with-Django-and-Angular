import { Component, Input, OnInit } from '@angular/core';
import { IPet } from '../models/IPet';
import { PetsApiService } from '../../shared/services/pets-api.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  @Input()
  Pets: IPet[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
