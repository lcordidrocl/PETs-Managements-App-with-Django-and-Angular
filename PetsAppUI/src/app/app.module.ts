import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PetsApiService } from './shared/services/pets-api.service';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { YearsToNowPipe } from './shared/pipes/years-to-now.pipe';
import { PetsManagementComponent } from './pets/pets-management/pets-management.component';
import { DeletePetComponent } from './pets/delete-pet/delete-pet.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    AddPetComponent,
    YearsToNowPipe,
    PetsManagementComponent,
    DeletePetComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PetsApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
