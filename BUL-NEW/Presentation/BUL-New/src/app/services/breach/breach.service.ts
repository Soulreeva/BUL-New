import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Breach } from 'src/app/models/breach';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private currentBreach?: string;

  private dbPath = '/breach';
  private breachRef: AngularFirestoreCollection<Breach>;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private db: AngularFirestore
  ) {
    this.breachRef = db.collection(this.dbPath);
  }

  public setCurrentBreach(search: string) {
    this.currentBreach = search;
  }

  // Api call to have i been pwned

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

  public read(): AngularFirestoreCollection<Breach> {
    return this.breachRef;
  }

  public create(password: Breach): any {
    return this.breachRef?.add(password);
  }

  public update(id: string, data: any): Promise<void> {
    return this.breachRef.doc(id).update(data);
  }

  public delete(id: string): Promise<void> {
    return this.breachRef.doc(id).delete();
  }
}
