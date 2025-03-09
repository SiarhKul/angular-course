import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
  ],
})
export class AppComponent {
  coreCourse:Course = COURSES[0]
  rxjsCourse:Course = COURSES[1]
  ngrxCourse:Course = COURSES[2]

}
