import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPet } from '../../pets/models/IPet';

@Injectable({
  providedIn: 'root'
})
export class PetsApiService {

  readonly limit = 10;

  readonly baseURL = "http://127.0.0.1:8000/pet";

    constructor(private httpClient: HttpClient) {}

    getPets(offset: number): Observable<IPet[]>
    {
        return this.httpClient.get<IPet[]>(this.baseURL + `?offset=${offset}`);
    }
    
    getPetsByAge(age: number): Observable<IPet[]>
    {
        return this.httpClient.get<IPet[]>(this.baseURL + `/age/${age}`);
    }

    getPetsByName(name: string):Observable<IPet[]>
    {
      return this.httpClient.get<IPet[]>(this.baseURL + `/name/${name}`);
    }

    addPet(pet: IPet)
    {
        return this.httpClient.post<IPet>(this.baseURL, pet);
    }

    deletePet(id: number)
    {   
        return this.httpClient.delete<IPet>(this.baseURL + `/${id}`);
    }
}
