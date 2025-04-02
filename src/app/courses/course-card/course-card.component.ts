import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone: false,
  // providers: [CoursesService],
})
export class CourseCardComponent implements OnInit,
  OnDestroy,
  OnChanges,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
  AfterViewInit, DoCheck {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(
    private coursesService: CoursesService,
  ) {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', 7);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', 1);
    // console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit', 2);
    // console.log('ngOnInit-id', this.coursesService.id);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', 3);
  }


  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });

  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy', 10);
  }

  ngAfterContentChecked(): void {

    this.course.description = '1111111111111111',
      console.log('ngAfterContentChecked', 4);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', 5);
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', 6);

  }


}
