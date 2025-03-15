import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CommonModule
  ],
})
export class AppComponent {
  courses: Course[]=COURSES
  startDate = new Date(2000,0,1)
  course = COURSES[0]

  trackCourse(index: number, course: Course) {
    return course.id
  }

  courseSelected(course:Course){
    console.log('444444444444444444', course);
  }

}
