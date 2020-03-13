import { Directive, HostListener, OnChanges, ElementRef, AfterViewChecked, AfterViewInit, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[appListeners]'
})
export class ListenersDirective implements OnInit, OnChanges, AfterViewInit {

  private clickObservable$: Observable<any>;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.clickObservable$ = fromEvent(this.elementRef.nativeElement, 'click');

    this.initEventObservables();
  }

  // @HostListener('click', ['$event.target'])
  // onClick(btn) {
  //   console.log(btn, ' been clicked');
  // }

  ngOnChanges() {
    console.log('directive on change');
  }

  initEventObservables() {
    this.clickObservable$.pipe(tap(_ => {console.log('i am here'); })).subscribe(() => {
      console.log('give it a try');
    });
  }

}
