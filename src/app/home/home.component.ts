import { Component, OnInit } from '@angular/core';

import { CountriesService } from './../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any;
  searchTerm: any;
  selectedCont: any = "All";
  changeOrNot: any;
  renderMsg: boolean = false


  constructor(public service: CountriesService) {}

  ngOnInit(): void {
    this.getCountriesOnService()
  }


  getCountriesOnService() {
    this.service.getAllCountries().subscribe((data: any) => {
      this.cards = data
      console.log('this.cards: ', this.cards)
      
      this.searchForCountries(data)
      this.selectContinent(data)
    })
    
  }

  searchForCountries(data: any) {
    var inputSearch = document.getElementById('search')

    inputSearch?.addEventListener("keyup", () => {
      this.cards = data.filter((ctry: any) => ctry.name.common.toLowerCase().includes(this.searchTerm.toLowerCase()))
      console.log(this.cards);
      if(this.cards.length < 1 ) {
        this.renderMsg = true
      } else {
        this.renderMsg = false
      }
    })
    
  }


  selectContinent(data: any) {
    var selectInput = document.getElementById('mySelectId')
    if(this.selectedCont == "All") {
      return
    } else {
      this.cards = data.filter((ctry: any) => {
        console.log('selectedCont: ', this.selectedCont);
        return ctry.region == this.selectedCont
      })
    }

    selectInput?.addEventListener("change", () => console.log('Mudou!'))

  }


  onChange(newCont: any) {
    console.log("newCont: ", newCont)

    if(newCont == "All") {
      this.service.getAllCountries().subscribe((data: any) => {
        this.cards = data
      })
      return
    } else {
      this.service.getAllCountries().subscribe((data: any) => {
        this.cards = data.filter((ctry: any) => {
          return ctry.region == newCont
        })
      })
    }
  }



}
