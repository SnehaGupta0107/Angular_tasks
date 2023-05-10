import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first-number',
  templateUrl: './first-number.component.html',
  styleUrls: ['./first-number.component.css','../app.component.css']
})
export class FirstNumberComponent implements OnInit {
  @Output() first_number = new EventEmitter<number>();
  @ViewChild('firstNumber') firstNumber!: ElementRef;

  constructor(){}
  ngOnInit(): void {}

  //emit first number
  onFirstNumber(){
    this.first_number.emit(this.firstNumber.nativeElement.value);
  }
}
