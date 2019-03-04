import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule} from './core/core.module';
import { LoginModule } from './login/login.module';
import {ProjectModule} from './project/project.module';


import { AppComponent } from './app.component';
import {TaskModule} from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    SharedModule,
    ProjectModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
