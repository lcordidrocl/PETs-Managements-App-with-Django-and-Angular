import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsManagementComponent } from './pets/pets-management/pets-management.component';
import { PetsSearchComponent } from './pets/pets-search/pets-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search/pets', pathMatch: 'full' },
  { path: 'search/pets', component: PetsSearchComponent },
  { path: 'manage/pets', component: PetsManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
