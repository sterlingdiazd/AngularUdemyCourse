import { Component } from '@angular/core';

@Component({
	selector: 'warning-alert-component',
	templateUrl: './warning-alert.component.html',
	styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
	message = 'This is a sample warning'
}