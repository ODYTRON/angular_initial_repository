// in the first lesson i installed npm install --save bootstrap@3  (localy in this project)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// for two way binding you need the following import
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import your first component
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    // you also need to put the following for two way binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
