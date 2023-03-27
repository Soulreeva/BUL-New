import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private passwordSearch?: string;

  constructor(private http: HttpClient) {}

  public setPasswordSearch(search: string) {
    this.passwordSearch = search;
  }

  public getPasswordData() {
    var test = this.http.get(
      `https://api.pwnedpasswords.com/range/${this.passwordSearch}`
    );
    return test;
  }
}
