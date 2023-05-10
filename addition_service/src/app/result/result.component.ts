import { Component, EventEmitter, OnInit } from '@angular/core';
import { additionService } from '../addition.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css','../app.component.css']
})
export class ResultComponent implements OnInit {

  total:number = 0;
  constructor(private additionService:additionService){}
  ngOnInit() {
    //get addition result
    this.additionService.addition_result.subscribe((result:number) => this.total =result);
  }  
}
