import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuccessAlertComponent } from './Alerts/SuccessAlert/succesAlert.component';
import { WarningAlertComponent } from './Alerts/WarningAlert/warning-alert.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
	declarations: [AppComponent, ServerComponent, SuccessAlertComponent, WarningAlertComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
