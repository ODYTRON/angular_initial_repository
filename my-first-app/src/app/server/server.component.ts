// import component decorator from lib
import { Component } from '@angular/core' ;

// declare component decorator
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

// the class of the component

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

}