import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created.";
  addServerCss = "btn add-server";
  serverName = "Enter a server name...";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.addServerCss = "btn btn-primary add-server"
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server created (name: ${this.serverName})`;
    this.serverCreated = true;
  }

  onServerNameUpdate(e: any) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
