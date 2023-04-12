import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { onValue, push, ref, set } from 'firebase/database';
import { Paste } from 'src/app/models/paste';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PasteService {
  private apiUrl = 'https://haveibeenpwned.com/api/v3/pasteaccount/';
  private currentPaste?: string;
  private now = new Date().toISOString();

  constructor(private http: HttpClient, private auth: AuthService, private db: Database) {}

  // Setting current paste search
  public setCurrentPaste(paste: string) {
    this.currentPaste = paste;
  }

  // Api call to have i been pwned
  public getPasteData() {
    return this.http.get<Paste[]>(this.apiUrl + this.currentPaste, this.auth.addAuthorizationHeader());
  }

  // Database CRUD
  public storePasteDataToDb(paste: Paste[]) {
    set(push(ref(this.db, 'paste-check/')), {
      Search: this.currentPaste,
      SearchDate: this.now,
      Data: paste,
    });
  }

  public getPasteDataFromDb() {
    onValue(ref(this.db, 'paste-check/'), (snapshot) => {
      return snapshot.val();
    });
  }
}
