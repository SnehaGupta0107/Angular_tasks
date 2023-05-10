import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-div',
  templateUrl: './data-div.component.html',
  styleUrls: ['./data-div.component.css']
})
export class DataDivComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response;
      });
  }
}
