import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared/UserService';

@Component({
  selector: 'app-detector-console',
  templateUrl: './detector-console.component.html',
  styleUrls: ['./detector-console.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectorConsoleComponent implements OnInit, OnChanges {

  @Input() consoleObject: { count: number };
  @Input() actionObservable: Subject<void>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private userService: UserService) {
  }

  ngOnInit(): void {
    this.actionObservable.asObservable().subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
  }


  ngOnChanges() {
    console.log('i am changed parent');
  }

  getUser() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

}
