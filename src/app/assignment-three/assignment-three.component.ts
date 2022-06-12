import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-assignment-three',
	templateUrl: './assignment-three.component.html',
	styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  displayDetails: boolean = false
  buttonClicks = []
  clicksCounter: number = 0
	constructor() {}

	ngOnInit(): void {}
  showDetails() {
    this.clicksCounter++
    this.buttonClicks.push(this.clicksCounter)
    this.displayDetails = !this.displayDetails
  }
}
