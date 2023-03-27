import { Component } from '@angular/core';
import { Paste } from 'src/app/models/paste';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css'],
})
export class PasteComponent {
  public searchData: string = 'foo@bar.com';
  public resultsCount: number = 0;

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

  ngOnInit() {}

  public search() {
    this.pasteService.setPasteSearch(this.searchData);
    this.pasteService.getPasteData().subscribe((result) => {
      this.searchResults = result;
      this.resultsCount = 0;
    });
  }

  public clear() {
    this.searchData = '';
    this.searchResults = undefined;
  }

  public indexCount() {
    this.resultsCount++;
    if (this.resultsCount > this.searchResults?.length!) {
      this.resultsCount = 0;
    }
    return this.resultsCount;
  }
}
