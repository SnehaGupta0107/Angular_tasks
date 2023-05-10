import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-tabular',
  templateUrl: './data-tabular.component.html',
  styleUrls: ['./data-tabular.component.css']
})
export class DataTabularComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response;
      });
  }
}
