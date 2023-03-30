import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Password } from 'src/app/models/password';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private currentPassword?: string;

  private dbPath = '/password';
  private passwordRef!: AngularFirestoreCollection<Password>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.passwordRef = db.collection(this.dbPath);
  }

  // Setting current password search
  public setCurrentPassword(password: string) {
    this.currentPassword = password;
  }

  // Api call to have i been pwned
  public getPasswordData() {
    return this.http.get(
      `https://api.pwnedpasswords.com/range/${this.currentPassword}`,
      { responseType: 'text' }
    );
  }

  // Database CRUD
  public read(): AngularFirestoreCollection<Password> {
    return this.passwordRef;
  }

  public create(password: Password): any {
    return this.passwordRef?.add(password);
  }

  public update(id: string, data: any): Promise<void> {
    return this.passwordRef.doc(id).update(data);
  }

  public delete(id: string): Promise<void> {
    return this.passwordRef.doc(id).delete();
  }
}
