import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-scrub',
  templateUrl: './provider-scrub.component.html',
  styleUrls: ['./provider-scrub.component.css']
})
export class ProviderScrubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openGoogle() {
    console.log('i will open google');
    window.open('https://www.google.com/');
  }
}
