import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SuccessAlertComponent } from './Alerts/SuccessAlert/succesAlert.component';
import { WarningAlertComponent } from './Alerts/WarningAlert/warning-alert.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		SuccessAlertComponent,
		WarningAlertComponent,
		AssignmentTwoComponent,
		AssignmentTwoComponent,
		AssignmentThreeComponent,
		AssignmentThreeComponent
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
