import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { COURSE_SERVICE } from '../app.component';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone: false,
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(
    // @Inject(COURSE_SERVICE) private coursesService: CoursesService,
  ) {
  }

  ngOnInit() {
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });

  }


}
