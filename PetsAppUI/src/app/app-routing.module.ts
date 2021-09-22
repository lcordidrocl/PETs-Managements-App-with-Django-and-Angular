import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsManagementComponent } from './pets/pets-management/pets-management.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'manage/pets', component: PetsManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
