import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab6-Web';
  parent1 = false;
  parent2 = false;

  // tslint:disable-next-line:typedef
  show1() {
    this.parent1 = !this.parent1;
  }

  // tslint:disable-next-line:typedef
  show2() {
    this.parent2 = !this.parent2;
  }
}
