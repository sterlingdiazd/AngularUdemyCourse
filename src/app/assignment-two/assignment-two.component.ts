import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-assignment-two',
	templateUrl: './assignment-two.component.html',
	styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
	username: string = 'Sterling'
	constructor() {}

	ngOnInit(): void {}

	isUsernameValid() {
		return this.username.length > 0
	}

  resetUsername() {
    this.username = ''
  }
}
