import { Component, OnInit, Input } from '@angular/core';
import { PETsAPIService } from 'src/app/Shared/PETsAPI.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private petsApiService: PETsAPIService) { }

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
    
    this.petsApiService.addPet(newPet).subscribe(res => { alert(res.toString()) });
  }
}
