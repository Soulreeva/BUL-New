import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breach } from 'src/app/models/breach';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSearch?: string;

  constructor(private http: HttpClient, private auth: AuthService) {}

  public setAccountSearch(search: string) {
    this.accountSearch = search;
  }

  public getAccountData() {
    return this.http.get<Breach[]>(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${this.accountSearch}?truncateResponse=false`,
      this.auth.addAuthorizationHeader()
    );
  }
}
