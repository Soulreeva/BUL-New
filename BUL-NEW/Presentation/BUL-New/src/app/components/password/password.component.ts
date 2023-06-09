import { Component } from '@angular/core';
import * as crypto from 'crypto-js';
import { PasswordService } from './../../services/password/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  public inputSearch: string = '';
  public searchResults?: number;
  public hashedSearchData?: string;
  public breached = false;

  public results?: any;

  constructor(private passwordService: PasswordService) {}

  public ngOnInit() {}

  public search() {
    this.breached = false;

    // deepcode ignore InsecureHash: Used for Api call to have I been pwned
    this.hashedSearchData = crypto.SHA1(this.inputSearch).toString().toUpperCase();

    const prefix = this.hashedSearchData.substring(0, 5);
    const suffix = this.hashedSearchData.substring(5);

    this.passwordService.setCurrentPassword(prefix);

    this.passwordService.getPasswordData().subscribe((result: any) => {
      var hashes = result.split('\r\n');

      for (let i = 0; i < hashes.length; i++) {
        const hash = hashes[i];
        const h = hash.split(':');

        if (h[0] === suffix) {
          this.searchResults = h[1];
          this.breached = true;
          this.passwordService.storePasswordDataToDb(this.inputSearch, h[1]);
          break;
        }
      }
    });
  }

  public clear() {
    this.inputSearch = '';
    this.searchResults = undefined;
    this.breached = false;
  }
}
