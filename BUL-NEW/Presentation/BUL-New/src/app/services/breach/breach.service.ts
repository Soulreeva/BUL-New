import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breach } from 'src/app/models/breach';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private breachSearch?: string;

  constructor(private http: HttpClient, private auth: AuthService) {}

  public setBreachSearch(search: string) {
    this.breachSearch = search;
  }

  public getBreachData() {
    return this.http.get<Breach[]>(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${this.breachSearch}?truncateResponse=false`,
      this.auth.addAuthorizationHeader()
    );
  }

  public getAllBreachData() {
    return this.http.get<Breach[]>(
      `https://haveibeenpwned.com/api/v3/breaches`
    );
  }
}
