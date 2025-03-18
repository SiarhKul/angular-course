import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {
  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index:number;

  @Output()
  courseSelected2 = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent,{read: ElementRef})
  image:ElementRef;

  onCourseViewed(){
    this.courseSelected2.emit(this.course);
    console.log('11111111111');
  }

  get isBeginnerCourse(): boolean {
    return this.course.category === 'BEGINNER';
  }

  ngAfterViewInit(): void {
    console.log('111111111111',this.image);
  }
}
