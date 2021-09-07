import { Component, OnInit, Input } from '@angular/core';
import { PetsApiService } from 'src/app/Shared/PetsApi.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private petsApiService: PetsApiService) { }

  @Input() Pet:any;
  Name: string = "";
  Age: number = 0;
  IsAgeAproximated: boolean = false;


  ngOnInit(): void {
    this.Name = this.Pet.Name;
    this.Age = this.Pet.Age;
    this.IsAgeAproximated = this.Pet.IsAgeAproximated;
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
      next: data=> {},
      error: error => {
        console.error(error);
      }
    });
  }
}
