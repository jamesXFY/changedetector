import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, AfterViewChecked, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared/UserService';

@Component({
  selector: 'app-detector-console',
  templateUrl: './detector-console.component.html',
  styleUrls: ['./detector-console.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectorConsoleComponent implements OnInit, OnChanges, AfterViewChecked, AfterContentChecked {

  @Input() consoleObject: { count: number };
  @Input() actionObservable: Subject<void>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private userService: UserService) {
  }

  ngAfterContentChecked(): void {
    console.log('content check');
  }

  ngOnInit(): void {
    this.actionObservable.asObservable().subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewChecked(): void {
    console.log('detector checked');
  }


  ngOnChanges() {
    console.log('i am changed parent');
  }

  getUser() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

  // @HostListener('document:click', ['$event.target'])
  // onClick(btn) {
  //   console.log(btn, ' been clicked');
  // }

}
