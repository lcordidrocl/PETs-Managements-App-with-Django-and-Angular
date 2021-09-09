import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PetsApiService } from './shared/pets-api.service';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { YearsToNowPipe } from './shared/pipes/years-to-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    AddPetComponent,
    YearsToNowPipe
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
