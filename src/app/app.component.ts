import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'countries-api';


  ngOnInit(): void {

  }

  resTheme(evento: any) {
    console.log(evento)

    if(evento == true) {
      var divTheme = document.getElementById('theme')
      divTheme?.setAttribute('class', 'light-theme')
      document.body.style.backgroundColor = "#fff"
    } else {
      var divTheme = document.getElementById('theme')
      divTheme?.setAttribute('class', 'dark-theme')
      window.document.body.style.backgroundColor = "hsl(207, 26%, 17%);"
      
    }
    
  }
  
}
