import {AfterViewChecked, Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements DoCheck, OnChanges, AfterViewChecked {
  logger: any  = Log.create('Test3Component');

  constructor(){
    this.logger.color = 'green';
  }
  ngDoCheck(): void {
    this.logger.data ('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data ('OnChanges');
  }

  ngAfterViewChecked(): void {
    this.logger.data('AfterViewChecked');
  }
  clickTestButton(){
    this.logger.data('Click test button');
  }

}
