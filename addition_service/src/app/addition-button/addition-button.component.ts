import { Component } from '@angular/core';
import { additionService } from '../addition.service';

@Component({
  selector: 'app-addition-button',
  templateUrl: './addition-button.component.html',
  styleUrls: ['./addition-button.component.css','../app.component.css']
})
export class AdditionButtonComponent {
  addi!:number;
  constructor(private additionService:additionService){}

  //calculateAddition
  calculateResult(){
    this.additionService.getAddition();   
  }
}
