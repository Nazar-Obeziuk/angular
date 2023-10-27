import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-counter',
  templateUrl: './angular-counter.component.html',
  styleUrls: ['./angular-counter.component.scss']
})
export class AngularCounterComponent {

  public counter: number;

  constructor() {
    this.counter = 0;
  }

  countUp(number: number): void {
    this.counter += number;
  }

}