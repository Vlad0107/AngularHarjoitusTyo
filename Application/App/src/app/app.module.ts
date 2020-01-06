import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule  } from 'ngx-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { DataService } from './dataservice/dataservice.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllbusesComponent } from './allbuses/allbuses.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    View1Component,
    View2Component,
    View3Component,
    AllbusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyCo5eHkeqhurDSk1LwGLQk0D2YUI8pbKhM'
    }),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
