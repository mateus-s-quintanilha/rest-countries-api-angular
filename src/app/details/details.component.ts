import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from './../services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  countryParam!: string;
  countryObj!: any;
  currency: any;
  language: any;
  language2: any;
  borders!: any[];
  borderCodes: any;
  changeOrNot: any;

  constructor(
    private service: CountriesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getParamUrl()
  }

  getParamUrl() {
    this.route.params.subscribe(params => {
      this.countryParam = params['id']
      console.log('countryParam: ', this.countryParam);
    }) 
    this.getCountryOnService(this.countryParam)   
    
  }
  
  getCountryOnService(url: string) {
    console.log('url chegando no serviço: ', url);
    
    this.service.getAllCountries().subscribe((data) => {
      this.countryObj = data.filter((ctry: any) => {
        return ctry.cca3 == url
      })[0]

      console.log('countryObj: ', this.countryObj);

      var cur = this.countryObj.currencies
      this.currency = cur[Object.keys(cur)[0]].name
    
      if(Object.keys(this.countryObj.languages).length > 1) {
        var lang1 = this.countryObj.languages
        this.language = lang1[Object.keys(lang1)[0]]

        var lang2 = this.countryObj.languages
        this.language2 = lang2[Object.keys(lang2)[1]]
      } else {
        var lang = this.countryObj.languages
        this.language = lang[Object.keys(lang)[0]]
      }

      this.borders = this.countryObj.borders
      
    })   
  }




}
