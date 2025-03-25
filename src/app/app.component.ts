import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {


  courses;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '4');

    this.http.get('/api/courses', {
      params: params,
    }).subscribe(
      courses => {
        console.log('ffffffffffffff', courses);
        return this.courses = courses;
      },
    );
  }


}
