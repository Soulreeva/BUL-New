import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasteService {
  private pasteSearch?: string;

  constructor(private http: HttpClient) {}

  public setPasteSearch(search: string) {
    this.pasteSearch = search;
  }

  getPasteData() {
    const apiKey = 'ec66c4615e6e4522afd7e53c9900d662';

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('hibp-api-key', apiKey)
      .set('Access-Control-Allow-Origin', '*')
      .set('Connection', 'keep-alive')
      .set('Accept-Encoding', 'gzip, deflate, br')
      .set('Accept', '*/*');

    return this.http.get(
      `https://haveibeenpwned.com/api/v3/pasteaccount/${this.pasteSearch}`,
      {
        headers: headers,
      }
    );
  }
}
