import { Component } from '@angular/core';
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})
export class ServerComponent {
    allowNewServer = false
	serverName = ''
	serverCreated = false
	serverCreationStatus = 'No server was created'

	/**
	 *
	 */
	constructor() {
		setTimeout(() => {
			this.allowNewServer = true
		}, 2000)

	}
	onCreateServer() {
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
}