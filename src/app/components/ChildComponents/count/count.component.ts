import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit, OnChanges {

  @Input() consoleObject: {count: number};

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('i am changed');
  }

  detect() {
    this.changeDetectorRef.detectChanges();
  }

}
