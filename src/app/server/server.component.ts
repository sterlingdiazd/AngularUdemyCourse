import { Component } from '@angular/core';
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
	`]
})
export class ServerComponent {
	allowNewServer = false
	serverName = ''
	serverCreated = false
	serverCreationStatus = 'No server was created'
	serverId: number = 10
	serverStatus: string = 'offline'
	servers = ['Test', 'Test2']

	/**
	 *
	 */
	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
		setTimeout(() => {
			this.allowNewServer = true
		}, 2000)
	}
	onCreateServer() {
		this.servers.push(this.serverName)
		if (this.serverName.length == 0) {
			this.serverCreated = false
		} else {
			this.serverCreated = true
			this.serverCreationStatus = 'Server was created! Name is '
		}
	}
	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value
	}

	getServerStatus() {
		return this.serverStatus
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red'
	}
}