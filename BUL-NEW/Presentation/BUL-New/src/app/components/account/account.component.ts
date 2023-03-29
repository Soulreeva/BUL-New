import { Component } from '@angular/core';
import { Breach } from 'src/app/models/breach';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  public inputSearch: string = 'adobe';
  public resultsCount?: number;
  public searchResults?: Breach[];
  public toggleSwitch: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  public search() {
    this.searchResults = undefined;
    this.accountService.setAccountSearch(this.inputSearch);
    this.accountService.getAccountData().subscribe((result) => {
      this.searchResults = result;
    });
  }

  public clear() {
    this.inputSearch = '';
    this.searchResults = undefined;
  }
}
