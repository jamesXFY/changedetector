import { Component, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewChecked {
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

  ngAfterViewChecked(): void {
    console.log('app checked');
  }
}
