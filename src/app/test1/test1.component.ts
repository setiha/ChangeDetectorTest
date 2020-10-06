import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {Log} from 'ng2-logger/browser';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],

})
export class Test1Component implements DoCheck, OnChanges, AfterViewChecked, AfterViewInit {
  logger: any = Log.create('Test1Component');

  @Input() buttonText: { text: string };

  constructor(private cdr: ChangeDetectorRef) {
    this.logger.color = '#333';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges');
    if (changes.buttonText != null) {
      this.cdr.detectChanges();
    }
  }

  ngAfterViewChecked(): void {
    this.logger.data('AfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  changeButtonText(): any {
    this.buttonText = {text: new Date().toTimeString()};
    this.cdr.detectChanges();
  }
}
