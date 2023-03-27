import { Component } from '@angular/core';
import { PasteService } from 'src/app/services/paste/paste.service';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css'],
})
export class PasteComponent {
  public searchData: string = '';
  public searchResult?: any;

  constructor(private pasteService: PasteService) {}

  ngOnInit() {}

  public search() {
    this.pasteService.setPasteSearch(this.searchData);
    this.pasteService.getPasteData().subscribe((result) => {
      this.searchResult = result;
    });
  }

  public clear() {
    this.searchData = '';
    this.searchResult = undefined;
  }
}
