import { Component, signal } from '@angular/core';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [],
  standalone: true,
})
export class AppComponent {

  // courses = [...COURSES];

  performPrefetch = false;

  display = false;

  counter = signal(0);
  course = signal({
    id: 1,
    title: 'Course 1',
  });

  courses = signal(['Angular', 'React']);

  increment() {
    this.counter.set(this.counter() + 1);

    this.course.set({
      id: 1,
      title: 'Course 2',
    });
    this.courses.update((courses) => [...courses, 'Vue']);
  }

  onCourseSelected(course: Course) {

    console.log('App component - click event bubble', course);

  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }


  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay() {
    this.display = true;
  }
}
