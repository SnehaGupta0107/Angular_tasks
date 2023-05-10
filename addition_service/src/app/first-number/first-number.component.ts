import { Component, ElementRef, ViewChild } from '@angular/core';
import { additionService } from '../addition.service';

@Component({
  selector: 'app-first-number',
  templateUrl: './first-number.component.html',
  styleUrls: ['./first-number.component.css','../app.component.css']
})
export class FirstNumberComponent {

  @ViewChild('firstNumber') firstNumber!: ElementRef;

  constructor(private addition_service : additionService){}
  onFirstNumber(){
    this.addition_service.first_number = this.firstNumber.nativeElement.value;
  }
}
