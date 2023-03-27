import { PasswordService } from './../../services/password/password.service';
import { Component } from '@angular/core';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  public searchData: string = '';
  public searchResults?: any;
  public hashedSearchData?: string;
  public resultMessage?: string;

  public results?: any;

  constructor(private passwordService: PasswordService) {}

  ngOnInit() {}

  public search() {
    this.hashedSearchData = crypto.SHA1(this.searchData).toString();

    const prefix = this.hashedSearchData.substring(0, 5);
    const suffix = this.hashedSearchData.substring(
      0,
      this.hashedSearchData.length
    );

    this.passwordService.setPasswordSearch(prefix);

    this.passwordService.getPasswordData().subscribe((result: any) => {
      var hashes = result.split(' ');
      var breached = false;

      for (let i = 0; i < hashes.length; i++) {
        const hash = hashes[i];
        const h = hash.split(':');

        if (h[0] === suffix) {
          this.resultMessage = `The password: ${this.searchData} has been breached ${h[1]} times!`;
          breached = true;
          break;
        }
      }

      if (!breached) {
        `The password: ${this.searchData} has never been breached! This is a strong password!`;
      }
    });
  }

  public clear() {
    this.searchData = '';
    this.searchResults = undefined;
  }
}
