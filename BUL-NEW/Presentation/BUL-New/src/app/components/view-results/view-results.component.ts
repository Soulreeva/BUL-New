import { Component } from '@angular/core';
import { BreachService } from 'src/app/services/breach/breach.service';
import { PasswordService } from 'src/app/services/password/password.service';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss'],
})
export class ViewResultsComponent {
  public passwordResults?: any;
  public pasteResults?: any;
  public breachResults?: any;

  public passwordColumns: string[] = ['index', 'password', 'count', 'dateCreated'];

  public pasteColumns: string[] = ['index', 'search', 'searchDate', 'id', 'source', 'title', 'emailCount', 'date'];

  public breachColumns?: string[] = [
    'index',
    'search',
    'searchDate',
    'name',
    'title',
    'domain',
    'breachDate',
    'addedDate',
    'modifiedDate',
    'pwnCount',
  ];

  constructor(
    private breachService: BreachService,
    private passwordService: PasswordService,
    private pasteService: PasteService
  ) {}

  public ngOnInit() {
    this.getBreachData();
    this.getPasswordData();
    this.getPasteData();
  }

  private getBreachData() {}

  private getPasswordData() {
    this.passwordResults = this.passwordService.getPasswordFromDb();

    var passwords = [];
  }

  private getPasteData() {
    this.pasteResults = this.pasteService.getPasteDataFromDb();
  }
}
