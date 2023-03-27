import { Component } from '@angular/core';
import {
  accountData,
  domainData,
  passwordData,
  pasteData,
} from 'src/app/constants/constants';
import { AccountSearch } from 'src/app/interfaces/account-search';
import { DomainSearch } from 'src/app/interfaces/domain-search';
import { PasswordSearch } from 'src/app/interfaces/password-search';
import { PasteSearch } from 'src/app/interfaces/paste-search';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public accountColumns: string[] = ['search', 'results', 'response'];
  public domainColumns: string[] = ['search', 'results', 'response'];
  public passwordColumns: string[] = ['search', 'results', 'response'];
  public pasteColumns: string[] = ['search', 'results', 'response'];

  public accountDataSource: AccountSearch[] = accountData;
  public domainDataSource: DomainSearch[] = domainData;
  public passwordDataSource: PasswordSearch[] = passwordData;
  public pasteDataSource: PasteSearch[] = pasteData;

  constructor() {}

  ngOnInit() {}
}
