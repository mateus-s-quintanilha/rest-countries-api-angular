import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CountriesService } from './../../services/countries.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkMode: boolean = true;
  // changeOrNot: any;

  change: boolean = false

  @Output() changeRes: EventEmitter<any> = new EventEmitter()

  constructor(private service: CountriesService) {
  }
  
  ngOnInit(): void {
  }



  onToggle() {
    this.change = !this.change

    this.changeRes.emit(this.change)

    if(this.change == true) {
      this.darkMode = false
    } else {
      this.darkMode = true
    }
  }

}
