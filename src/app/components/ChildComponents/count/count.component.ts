import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() consoleObject: { count: number };

  public reload = false;

  public users = [
    {
      name: 'lynan',
      status: false
    },
    {
      name: 'Jordan',
      status: true
    },
    {
      name: 'silly',
      status: true
    },
    {
      name: 'James',
      status: false
    },
    {
      name: 'Christ',
      status: true
    }
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log('count checked');
  }

  ngOnChanges() {
    console.log('i am changed');
  }

  detect() {
    this.users[0].status = !this.users[0].status;
    this.reload = !this.reload;
    this.changeDetectorRef.detectChanges();
  }

}
