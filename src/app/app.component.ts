import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

function courseServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);

}

export const COURSE_SERVICE = new InjectionToken<CoursesService>('COURSE_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [{
    provide: COURSE_SERVICE,
    useFactory: courseServiceProvider,
    deps: [HttpClient],
  }],
})

export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
   @Inject(COURSE_SERVICE) private coursesService: CoursesService,
  ) {

  }

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
