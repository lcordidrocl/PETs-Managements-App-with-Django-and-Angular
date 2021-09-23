import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PetsApiService } from './shared/services/pets-api.service';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { YearsToNowPipe } from './shared/pipes/years-to-now.pipe';
import { PetsManagementComponent } from './pets/pets-management/pets-management.component';
import { DeletePetComponent } from './pets/delete-pet/delete-pet.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetsSearchComponent } from './pets/pets-search/pets-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    YearsToNowPipe,
    PetsManagementComponent,
    DeletePetComponent,
    PetListComponent,
    PetsSearchComponent
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
