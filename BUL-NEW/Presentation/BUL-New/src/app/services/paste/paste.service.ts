import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paste } from 'src/app/models/paste';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PasteService {
  private pasteSearch?: string;

  constructor(private http: HttpClient, private auth: AuthService) {}

  public setPasteSearch(search: string) {
    this.pasteSearch = search;
  }

  public getPasteData() {
    var test = this.http.get<Paste[]>(
      `https://haveibeenpwned.com/api/v3/pasteaccount/${this.pasteSearch}`,
      this.auth.addAuthorizationHeader()
    );
    return test;
  }
}
