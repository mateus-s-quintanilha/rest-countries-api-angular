import { Component, Input, OnInit } from '@angular/core';

import { CountriesService } from './../../services/countries.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() country: any;

  changeOrNot: any;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
  }



}
