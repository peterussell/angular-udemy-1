import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10; // TypeScript typing (optional, serverId = 10 is fine).
  serverStatus: string = 'offline';

  getServerStatus() {
    return `Server ${this.serverId} is ${this.serverStatus}.`
  }
}
