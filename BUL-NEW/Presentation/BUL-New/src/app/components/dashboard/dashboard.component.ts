import { Component } from '@angular/core';
import {
  accountData,
  domainData,
  passwordData,
  pasteData,
} from 'src/app/constants/constants';
import { Account } from 'src/app/interfaces/account-search';
import { Domain } from 'src/app/interfaces/domain-search';
import { Password } from 'src/app/interfaces/password-search';
import { Paste } from 'src/app/interfaces/paste-search';

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

  public accountDataSource: Account[] = accountData;
  public domainDataSource: Domain[] = domainData;
  public passwordDataSource: Password[] = passwordData;
  public pasteDataSource: Paste[] = pasteData;

  constructor() {}

  ngOnInit() {}
}
