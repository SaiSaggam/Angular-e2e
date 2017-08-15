import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title = 'this is data binding';
  obj = {
    id: '1',
    name: 'Steven',
  }
  arr = ['abc', 'def', 'hij'];
  isTrue = true;
  myName = 'Steven';
  constructor() { }

  ngOnInit() {
  }
}
