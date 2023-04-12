import { Component } from '@angular/core';
import { Breach } from 'src/app/models/breach';
import { Paste } from 'src/app/models/paste';
import { BreachService } from 'src/app/services/breach/breach.service';
import { PasswordService } from 'src/app/services/password/password.service';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss'],
})
export class ViewResultsComponent {
  public passwordResults: any[] = [];
  public pasteResults: Paste[] = [];
  public breachResults: Breach[] = [];
  public passwordColumns: string[] = [];
  public pasteColumns: string[] = [];
  public breachColumns: string[] = [];

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

  private getBreachData() {
    this.breachColumns = [
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
  }

  private getPasswordData() {
    this.passwordColumns = ['index', 'password', 'count', 'dateCreated'];
    this.passwordService
      .getPasswordFromDb()
      .then((result: any) => {
        this.passwordResults = result;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  private getPasteData() {
    this.pasteColumns = ['index', 'search', 'searchDate', 'id', 'source', 'title', 'emailCount', 'date'];
  }
}
