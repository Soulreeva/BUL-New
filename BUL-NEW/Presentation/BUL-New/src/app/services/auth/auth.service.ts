import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'ec66c4615e6e4522afd7e53c9900d662';

  constructor() {}

  public addAuthorizationHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'hibp-api-key': this.apiKey,
      }),
    };
    return httpOptions;
  }
}
