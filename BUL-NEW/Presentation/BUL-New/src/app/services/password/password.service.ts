import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { child, get, push, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private currentPassword?: string;
  private now = new Date().toISOString();
  private dbRef = ref(this.db);

  constructor(private http: HttpClient, private db: Database) {}

  // Setting current password search
  public setCurrentPassword(password: string) {
    this.currentPassword = password;
  }

  // Api call to have i been pwned
  public getPasswordData() {
    return this.http.get(`https://api.pwnedpasswords.com/range/${this.currentPassword}`, { responseType: 'text' });
  }

  // Database CRUD
  public storePasswordDataToDb(password: string, count: number) {
    set(push(ref(this.db, 'password-check/')), {
      password: password,
      count: count,
      searchDate: this.now,
    });
  }

  public getPasswordFromDb(): any {
    var passwords: any = [];

    get(child(this.dbRef, 'password-check')).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        passwords.push(childSnapshot.val());
      });
      return passwords;
    });
    return passwords;
  }
}
