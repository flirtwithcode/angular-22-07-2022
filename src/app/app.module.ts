import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { PictureDemoComponent } from './picture-demo/picture-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserComponent } from './user/user.component';
import { CsspropertyAComponent } from './cssproperty-a/cssproperty-a.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DemoComponent,
    PictureDemoComponent,
    DashboardComponent,
    UserComponent,
    CsspropertyAComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
