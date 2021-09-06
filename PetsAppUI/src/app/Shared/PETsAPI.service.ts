import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PETsAPIService
{
    readonly baseURL = "http://127.0.0.1:8000/pet";

    constructor(private httpClient: HttpClient) {}

    getPets(): Observable<any[]>
    {
        return this.httpClient.get<any[]>(this.baseURL);
    }

    /* to be implemented   
    getPet(id: number)
    {
        return this.httpClient.get<any[]>(this.baseURL + `/${id}` );
    }
    */

    addPet(pet: any)
    {
        return this.httpClient.post(this.baseURL, pet);
    }

    deletePet(id: number)
    {   
        return this.httpClient.delete(this.baseURL + `/${id}`);
    }
}