import { Component, ElementRef, ViewChild } from '@angular/core';
import { additionService } from '../addition.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-second-number',
  templateUrl: './second-number.component.html',
  styleUrls: ['./second-number.component.css','../app.component.css']
})
export class SecondNumberComponent {
  @ViewChild('secondNumber') secondNumber!: ElementRef;
  constructor(private additionService:additionService){}

  onSecondNumber(){
    this.additionService.second_number = this.secondNumber.nativeElement.value;
  }
}
