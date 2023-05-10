import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sum-button',
  templateUrl: './sum-button.component.html',
  styleUrls: ['./sum-button.component.css','../app.component.css']
})
export class SumButtonComponent {
  @Output() total = new EventEmitter<number>();
  @Input() firstno!:number;
  @Input() secondno!:number;
  sum:number = 0;

  //calculate addition of two numbers
  onClick(){
    this.sum = Number( this.firstno) + Number(this.secondno);
    this.total.emit(this.sum);
  }
}
