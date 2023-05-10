import { EventEmitter, Injectable } from "@angular/core";
import { addToStorage } from "./add-storage.service";

@Injectable()
export class additionService{

    first_number:number = 0;
    second_number:number = 0;
    result:number = 0;
    addition_result = new EventEmitter<number>();
  
    constructor(private addToStorage:addToStorage){ }

    //calculate addition of two numbers
    getAddition(){
      this.result = Number(this.first_number) + Number(this.second_number)
      let items ={ 
          "first_number": this.first_number,
          "second_number": this.second_number,
          "result":this.result
        };  
      //store calculation to local storage
      this.addToStorage.addToLocalStorage(items);     
      return this.addition_result.emit( this.result );
    }  
}