import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  courses: Course[]=COURSES
  startDate = new Date(2000,0,1)
  course = COURSES[0]

  @ViewChild('cardRef1')
  card1: CourseCardComponent;

  @ViewChild('couseImage')
  couseImage: ElementRef;

  @ViewChildren(CourseCardComponent,{read: ElementRef})
  cards: QueryList<ElementRef>

  trackCourse(index: number, course: Course) {
    return course.id
  }

  courseSelected(course:Course){
    console.log(this.couseImage);
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe( (card:CourseCardComponent) => {
      console.log('1',card);
    })
    console.log('2',this.cards);
  }


  onCourseEdit(){
    this.courses.push(this.course)
  }
}
