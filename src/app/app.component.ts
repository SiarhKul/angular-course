import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [CoursesService],
})
export class AppComponent implements OnInit {

  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
  ) {
  }

  ngOnInit() {

  }

  editCourse() {

    const cou = this.courses[0];
    const newCourse = {
      ...cou,
      description: 'New course',
    };


    this.courses[0] = newCourse;
  }


  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Successfully Saved'),
    );
  }
}
