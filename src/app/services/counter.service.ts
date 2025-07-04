import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSignal = signal(0);
  readonly counter = this.counterSignal.asReadonly();


  increment() {
    if (this.counter() > 10) {
      throw new Error('Maximum counter signal');
    }
    this.counterSignal.update((val) => val + 1);
  }
}
