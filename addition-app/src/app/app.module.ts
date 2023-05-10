import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstNumberComponent } from './first-number/first-number.component';
import { SecondNumberComponent } from './second-number/second-number.component';
import { SumButtonComponent } from './sum-button/sum-button.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNumberComponent,
    SecondNumberComponent,
    SumButtonComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
