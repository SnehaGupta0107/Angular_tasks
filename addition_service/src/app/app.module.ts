import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstNumberComponent } from './first-number/first-number.component';
import { SecondNumberComponent } from './second-number/second-number.component';
import { AdditionButtonComponent } from './addition-button/addition-button.component';
import { ResultComponent } from './result/result.component';
import { addToStorage } from './add-storage.service';
import { AdditionHistoryComponent } from './addition-history/addition-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNumberComponent,
    SecondNumberComponent,
    AdditionButtonComponent,
    ResultComponent,
    AdditionHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [addToStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
