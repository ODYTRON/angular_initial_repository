import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // instead of the standard external url you can make template here
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
