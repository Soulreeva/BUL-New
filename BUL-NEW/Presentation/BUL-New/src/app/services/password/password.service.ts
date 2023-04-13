import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { child, get, push, ref, set } from 'firebase/database';
import { Password } from 'src/app/models/password';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private currentPassword?: string;
  private now = new Date().toISOString();
  private dbRef = ref(this.db);
  private numberOfResultsToShow: number = 10;

  public currentPasswords: Password[] = [];

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
    this.currentPasswords = [];
    var passwords: any = [];

    get(child(this.dbRef, 'password-check'))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          passwords.push(childSnapshot.val());
        });
        this.currentPasswords = passwords;
        var maxLength = this.countPasswords(this.currentPasswords);
        var minLength = maxLength - this.numberOfResultsToShow;
        this.currentPasswords = this.currentPasswords.slice(minLength, maxLength).reverse();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public countPasswords(array: Password[]) {
    var count = 0;
    for (var i in array) {
      array.hasOwnProperty(i) && count++;
    }
    return count;
  }
}
