import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstno:number = 0;
  secondno:number = 0;
  total:number = 0;

  //set first number
  onFirstNumber(firstno:number){
    this.firstno = firstno;
  }

  //set second number
  onSecondNumber(secondno:number){
    this.secondno = secondno;
  }

  //get addition of two numbers from sum-button component
  onSum(total:number){
    this.total = total;
  }
}
