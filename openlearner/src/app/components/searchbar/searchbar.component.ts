import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchInputControl = new  FormControl();
  searchResults: Observable<any>;
  
  constructor() { }

  ngOnInit() {
    this.searchResults = this.searchInputControl.valueChanges;
    this.searchResults.subscribe(value => console.log(value));
  }
}
