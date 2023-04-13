import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { child, get, push, ref, set } from 'firebase/database';
import { Paste } from 'src/app/models/paste';
import { PasteData } from 'src/app/models/pasteData';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PasteService {
  private currentPaste?: string;
  private now = new Date().toISOString();
  private dbRef = ref(this.db);
  private numberOfResultsToShow: number = 10;

  public currentPastes: Paste[] = [];

  constructor(private http: HttpClient, private auth: AuthService, private db: Database) {}

  // Setting current paste search
  public setCurrentPaste(paste: string) {
    this.currentPaste = paste;
  }

  // Api call to have i been pwned
  public getPasteData() {
    return this.http.get<PasteData[]>(
      `https://haveibeenpwned.com/api/v3/pasteaccount/${this.currentPaste}`,
      this.auth.addAuthorizationHeader()
    );
  }

  // Database CRUD
  public storePasteDataToDb(paste: PasteData[]) {
    set(push(ref(this.db, 'paste-check/')), {
      search: this.currentPaste,
      searchDate: this.now,
      data: paste,
    });
  }

  public getPasteFromDb(): any {
    this.currentPastes = [];
    var currentPastes: any = [];

    get(child(this.dbRef, 'paste-check'))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          currentPastes.push(childSnapshot.val());
        });
        this.currentPastes = currentPastes;
        var maxLength = this.countPastes(this.currentPastes);
        var minLength = maxLength - this.numberOfResultsToShow;
        this.currentPastes = this.currentPastes.slice(minLength, maxLength).reverse();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  private countPastes(array: Paste[]) {
    var count = 0;
    for (var i in array) {
      array.hasOwnProperty(i) && count++;
    }
    return count;
  }
}
