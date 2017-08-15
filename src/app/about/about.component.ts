import { Component, OnInit } from '@angular/core';
import { DataNinjaService } from '../services/data-ninja.service';
import { LoggingService } from '../services/logging.service';
declare var firebase: any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DataNinjaService]
})
export class AboutComponent implements OnInit {
  
   dataReceived = [];
  
   generateArray(obj) {
    return Object.keys(obj).map((key)=> obj[key]);
   };
  

  constructor(private ninjaService: DataNinjaService, private logger: LoggingService) { }
  logIt() { 
    this.logger.log();
  }
  ngOnInit() {
    this.ninjaService.fetchData().subscribe(
      (data) => this.dataReceived.push(data)
    );
    console.log(this.dataReceived);
    this.fbGetData();
  }
  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {console.log(snapshot.val())})
  }
  fbPostData(age,city, name) {
    firebase.database().ref('/').push({'age':age,'city':city,'name':name});
  
  }

}
