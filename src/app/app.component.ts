import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('cardRef1')
  card1: CourseCardComponent;

  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  trackCourse(index: number, course: Course) {
    return course.id
  }

  courseSelected(course:Course){
    // console.log(this.card1);
    // console.log(this.card2);
    console.log(this.containerDiv);
  }

}
