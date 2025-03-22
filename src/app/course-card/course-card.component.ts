import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList, TemplateRef,
} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
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

  @ContentChildren(CourseImageComponent,{read: ElementRef})
  images:QueryList<CourseImageComponent>;

  @Input()
  noImageTpl: TemplateRef<any>;

  onCourseViewed(){
    this.courseSelected2.emit(this.course);
    console.log('11111111111');
  }

  get isBeginnerCourse(): boolean {
    return this.course.category === 'BEGINNER';
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('111111111111',this.images);
  }
}
