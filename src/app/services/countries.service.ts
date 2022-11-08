import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlAll: string = "https://restcountries.com/v3.1/all"

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<any>(this.urlAll)
  }

  lightMode = new BehaviorSubject(false);
  changeLightMode = this.lightMode.asObservable();
  

  public changeTheme(changeOrNot: any) {
    this.lightMode.next(changeOrNot) 
  }

}
