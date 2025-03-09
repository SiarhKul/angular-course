import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
  ],
})
export class AppComponent {
  constructor() {
  }
}
