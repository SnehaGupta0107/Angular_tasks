import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class addToStorage{
    tabular_result = new EventEmitter<any[]>();
    sumData:any[] = [];

    constructor(){
      this.sumData =JSON.parse( localStorage.getItem('additionHistory') as any) || null;
    }

    //store calculation to local storage
    public addToLocalStorage(items:object) {
      this.sumData.push(items);
      localStorage.setItem('additionHistory', JSON.stringify(this.sumData)); 
      this.sumData =JSON.parse( localStorage.getItem('additionHistory') as any) || null;
      this.tabular_result.emit(this.sumData);
    }

     //get calculation from local storage
    getData(): any[] {
      let dataReturn =JSON.parse( localStorage.getItem('additionHistory') as any) || null;
      return dataReturn;        
    }    
}