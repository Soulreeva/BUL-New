import { Component } from '@angular/core';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss'],
})
export class ViewResultsComponent {
  passwordResults?: any;
  pasteResults?: any;
  breachResults?: any;

  passwordColumns: string[] = ['index', 'password', 'count', 'dateCreated'];

  pasteColumns: string[] = [
    'index',
    'search',
    'searchDate',
    'id',
    'source',
    'title',
    'emailCount',
    'date',
  ];

  breachColumns?: string[] = [
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

  constructor() {}

  ngOnInit() {}
}
