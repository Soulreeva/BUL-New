import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Paste } from 'src/app/models/paste';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PasteService {
  private currentPaste?: string;

  private dbPath = '/paste';
  private pasteRef!: AngularFirestoreCollection<Paste>;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private db: AngularFirestore
  ) {
    this.pasteRef = db.collection(this.dbPath);
  }

  // Setting current paste search
  public setCurrentPaste(paste: string) {
    this.currentPaste = paste;
  }

  // Api call to have i been pwned
  public getPasteData() {
    var test = this.http.get<Paste[]>(
      `https://haveibeenpwned.com/api/v3/pasteaccount/${this.currentPaste}`,
      this.auth.addAuthorizationHeader()
    );
    return test;
  }

  // Database CRUD
  public read(): AngularFirestoreCollection<Paste> {
    return this.pasteRef;
  }

  public create(password: Paste): any {
    return this.pasteRef.add(password);
  }

  public update(id: string, data: any): Promise<void> {
    return this.pasteRef.doc(id).update(data);
  }

  public delete(id: string): Promise<void> {
    return this.pasteRef.doc(id).delete();
  }
}
