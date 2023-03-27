import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paste } from 'src/app/models/paste';

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
    return this.http.get<Paste[]>(
      `https://haveibeenpwned.com/api/v3/pasteaccount/${this.pasteSearch}`,
      this.auth.addAuthorizationHeader()
    );
  }
}
