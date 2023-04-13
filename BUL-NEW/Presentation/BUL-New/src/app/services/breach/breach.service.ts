import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { child, get, push, ref, set } from 'firebase/database';
import { Breach } from 'src/app/models/breach';
import { BreachData } from 'src/app/models/breachData';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private currentBreach?: string;
  private now = new Date().toISOString();
  private dbRef = ref(this.db);
  private numberOfResultsToShow: number = 10;

  public currentBreaches: Breach[] = [];

  constructor(private http: HttpClient, private auth: AuthService, private db: Database) {}

  public setCurrentBreach(search: string) {
    this.currentBreach = search;
  }

  // Api calls to have i been pwned
  public getBreachData() {
    return this.http.get<BreachData[]>(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${this.currentBreach}?truncateResponse=false`,
      this.auth.addAuthorizationHeader()
    );
  }

  public getAllBreachData() {
    return this.http.get<BreachData[]>(`https://haveibeenpwned.com/api/v3/breaches`);
  }

  // Database CRUD
  public storeBreachToDb(data: BreachData[]) {
    set(push(ref(this.db, 'breach-check/')), {
      search: this.currentBreach,
      searchDate: this.now,
      data: data,
    });
  }

  public getBreachFromDb() {
    this.currentBreaches = [];
    var currentBreaches: any = [];

    get(child(this.dbRef, 'breach-check'))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          currentBreaches.push(childSnapshot.val());
        });
        this.currentBreaches = currentBreaches;
        var maxLength = this.countBreaches(this.currentBreaches);
        var minLength = maxLength - this.numberOfResultsToShow;
        this.currentBreaches = this.currentBreaches.slice(minLength, maxLength).reverse();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public countBreaches(array: Breach[]) {
    var count = 0;
    for (var i in array) {
      array.hasOwnProperty(i) && count++;
    }
    return count;
  }
}
