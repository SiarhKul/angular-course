import { Component, computed, EffectRef, signal } from '@angular/core';
import { Course } from './model/course';
import { CounterService } from './services/counter.service';

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
  effectRef: EffectRef;
  display = false;


  derivedCounter = computed(() => {
    return this.counterService.counter();
  });
  course = signal({
    id: 1,
    title: 'Course 1',
  });

  courses = signal(['Angular', 'React']);


  constructor(
    public counterService: CounterService,
  ) {

    /*    this.effectRef = effect((onCleanup) => {

          onCleanup(() => {
            console.log('Cleanup occurred');
          });
          const counterValue = this.counter();
          const derivedCounterValue = this.derivedCounter();
          console.log(`${counterValue} ${derivedCounterValue}`);
        }, {
          manualCleanup: true,
        });*/
  }

  onCleanUp() {
    this.effectRef.destroy();
  }

  increment() {
    this.counterService.increment();

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
