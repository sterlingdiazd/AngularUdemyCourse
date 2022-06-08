import { Component } from '@angular/core';

@Component({
	selector: 'succes-alert-component',
	templateUrl: './successAlert.component.html',
	styleUrls: ['./successAlert.component.css']
})
export class SuccessAlertComponent {
    message = 'Your task were successfull, congrats!'
}