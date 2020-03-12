import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChangeDetector';
  consoleObject = {
    count: 0
  };

  actionSubject = new Subject();

  addCount() {
    this.consoleObject.count = this.consoleObject.count + 1;
  }

  triggerDetector() {
    this.actionSubject.next();
  }
}
