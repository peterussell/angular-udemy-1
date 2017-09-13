import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `.online {
      background-color: #eee;
      padding: 5px;
    }`
  ]
})
export class ServerComponent {
  serverId: number = -1; // TypeScript typing (optional, serverId = 10 is fine).
  serverStatus: string = 'offline';

  constructor() {
    this.serverId = Math.floor(Math.random() * 20);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
