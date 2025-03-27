import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

function courseServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [CoursesService],
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
   private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    console.log(this.coursesService);
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Successfully Saved'),
    );
  }
}
