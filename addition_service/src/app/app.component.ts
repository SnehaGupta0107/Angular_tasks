import { Component, OnInit } from '@angular/core';
import { additionService } from './addition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[additionService]
})
export class AppComponent implements OnInit{
  title = 'Addition of two numbers:';

  ngOnInit(): void {  
  }  
}
