import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { onValue, push, ref, set } from 'firebase/database';
import { Breach } from 'src/app/models/breach';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private currentBreach?: string;
  private now = new Date().toISOString();

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private db: Database
  ) {}

  public setCurrentBreach(search: string) {
    this.currentBreach = search;
  }

  // Api calls to have i been pwned
  public getBreachData() {
    return this.http.get<Breach[]>(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${this.currentBreach}?truncateResponse=false`,
      this.auth.addAuthorizationHeader()
    );
  }

  public getAllBreachData() {
    return this.http.get<Breach[]>(
      `https://haveibeenpwned.com/api/v3/breaches`
    );
  }

  // Database CRUD
  public storeBreachDataToDb(data: Breach[]) {
    set(push(ref(this.db, 'breach-check/')), {
      Search: this.currentBreach,
      DateCreated: this.now,
      Data: data,
    });
  }

  public getBreachDataFromDb() {
    onValue(ref(this.db, 'breach-check/'), (snapshot) => {
      return snapshot.val();
    });
  }
}
