
import { Component, OnInit } from '@angular/core';
import { addToStorage } from "../add-storage.service";
@Component({
  selector: 'app-addition-history',
  templateUrl: './addition-history.component.html',
  styleUrls: ['./addition-history.component.css']
})
export class AdditionHistoryComponent  implements OnInit {

    data!:any[];

    ngOnInit(): void {
      this.data = this.addToStorage.getData();
    }
    constructor(private addToStorage: addToStorage) {
      //get calculation history data from addToStorage service 
      this.addToStorage.tabular_result.subscribe((result:any[]) => {this.data =  (result);    
    });  
  }
}
