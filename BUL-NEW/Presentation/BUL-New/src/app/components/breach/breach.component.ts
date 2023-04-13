import { Component } from '@angular/core';
import { BreachData } from 'src/app/models/breachData';
import { BreachService } from 'src/app/services/breach/breach.service';

@Component({
  selector: 'app-breach',
  templateUrl: './breach.component.html',
  styleUrls: ['./breach.component.scss'],
})
export class BreachComponent {
  public inputSearch: string = '';
  public resultsCount?: number;
  public searchResults?: BreachData[];
  public selectAll?: boolean;

  constructor(private breachService: BreachService) {}

  ngOnInit() {}

  public search() {
    this.searchResults = undefined;
    this.selectAll = false;
    this.breachService.setCurrentBreach(this.inputSearch);
    this.breachService.getBreachData().subscribe((result: BreachData[]) => {
      this.searchResults = result;
      this.breachService.storeBreachToDb(result);
    });
  }

  public clear() {
    this.inputSearch = '';
    this.searchResults = undefined;
    this.selectAll = false;
  }

  public searchAll() {
    this.searchResults = undefined;
    this.selectAll = true;
    this.breachService.getAllBreachData().subscribe((result: BreachData[]) => {
      this.searchResults = result;
    });
  }
}
