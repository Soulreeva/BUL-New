import { Component } from '@angular/core';
import * as crypto from 'crypto-js';
import { PasswordService } from './../../services/password/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  public inputSearch: string = 'qwerty123';
  public searchResults?: any;
  public hashedSearchData?: string;
  public resultMessage: string[] = [];
  public breached = false;

  public results?: any;

  constructor(private passwordService: PasswordService) {}

  ngOnInit() {}

  public search() {
    this.breached = false;

    this.hashedSearchData = crypto
      .SHA1(this.inputSearch)
      .toString()
      .toUpperCase();

    const prefix = this.hashedSearchData.substring(0, 5);
    const suffix = this.hashedSearchData.substring(5);

    this.passwordService.setPasswordSearch(prefix);

    this.passwordService.getPasswordData().subscribe((result: any) => {
      var hashes = result.split('\r\n');

      for (let i = 0; i < hashes.length; i++) {
        const hash = hashes[i];
        const h = hash.split(':');

        if (h[0] === suffix) {
          this.resultMessage[0] = `OH NO! '${this.inputSearch}' has been breached!`;
          this.resultMessage[1] = `This password has been seen ${h[1]} times before!`;
          this.resultMessage[2] = `This password has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it!`;

          this.breached = true;
          break;
        }
      }

      if (!this.breached) {
        this.resultMessage[0] = `'${this.inputSearch}' has never been breached!`;
        this.resultMessage[1] = `This is a strong password!`;
      }
    });
  }

  public clear() {
    this.inputSearch = '';
    this.searchResults = undefined;
    this.breached = false;
    this.resultMessage = [];
  }
}
