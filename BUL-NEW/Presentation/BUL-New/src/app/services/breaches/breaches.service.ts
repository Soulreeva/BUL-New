import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreachesService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get('https://haveibeenpwned.com/api/v3/breaches');
  }
}
