import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Breach } from 'src/app/models/breach';
import { Password } from 'src/app/models/password';
import { Paste } from 'src/app/models/paste';
import { BreachService } from 'src/app/services/breach/breach.service';
import { PasswordService } from 'src/app/services/password/password.service';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewResultsComponent {
  public tableColumns: string[] = ['index', 'search', 'searchDate', 'actions'];

  public expandedPasteDetails: Paste | null = null;
  public expandedBreachDetails: Breach | null = null;

  constructor(
    private breachService: BreachService,
    private passwordService: PasswordService,
    private pasteService: PasteService
  ) {}

  public ngOnInit() {
    this.passwordService.getPasswordFromDb();
    this.breachService.getBreachFromDb();
    this.pasteService.getPasteFromDb();
  }

  public get breaches(): Breach[] {
    return this.breachService.currentBreaches;
  }

  public get passwords(): Password[] {
    return this.passwordService.currentPasswords;
  }

  public get pastes(): Paste[] {
    return this.pasteService.currentPastes;
  }
}
