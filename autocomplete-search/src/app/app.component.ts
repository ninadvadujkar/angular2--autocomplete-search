import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {FormControl} from '@angular/forms';

import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  stateCtrl: FormControl;
  results: object[] = [];
  searchTerm$ = new Subject<string>();

  constructor(private _searchService: SearchService) {
    this.stateCtrl = new FormControl();
    this._searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results
      });
  }
}
