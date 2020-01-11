import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // instead of the standard external url you can make template here
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  // declare this var for later use in a method
  serverName = 'TestServer';
  username = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  onUpdateServerName(event: any) {

    // console.log(event);
    // instead of log this event you can cast an input html element
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.username = '';
  }


}

