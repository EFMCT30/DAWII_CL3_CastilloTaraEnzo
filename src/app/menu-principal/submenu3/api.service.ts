import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  getLocationsWithIDPar() {
    return this.http.get<any>(this.apiUrl);
  }
}
