import { Component } from '@angular/core';
import { Paste } from 'src/app/models/paste';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.scss'],
})
export class PasteComponent {
  public inputSearch: string = 'foo@bar.com';
  public resultsCount?: number;
  public searchResults?: Paste[];
  public resultColumns: string[] = [
    'index',
    'id',
    'source',
    'title',
    'emailCount',
    'date',
  ];

  constructor(private pasteService: PasteService) {}

  public ngOnInit() {
    this.resultsCount = 0;
  }

  public search() {
    this.searchResults = undefined;
    this.pasteService.setCurrentPaste(this.inputSearch);
    this.pasteService.getPasteData().subscribe((result) => {
      this.searchResults = result;
      this.pasteService.storePasteDataToDb(result);
    });
  }

  public clear() {
    this.inputSearch = '';
    this.searchResults = undefined;
  }
}
