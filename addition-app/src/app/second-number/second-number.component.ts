import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-number',
  templateUrl: './second-number.component.html',
  styleUrls: ['./second-number.component.css','../app.component.css']
})
export class SecondNumberComponent {
  @Output() second_number = new EventEmitter<number>();
  @ViewChild('secondNumber') secondNumber!: ElementRef;

  //emit second number
  onSecondNumber(){
    this.second_number.emit(this.secondNumber.nativeElement.value);
  }
}
