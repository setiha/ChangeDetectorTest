///<reference path="../../../node_modules/ngx-logger/lib/logger.service.d.ts"/>
import {AfterViewChecked, Component, DoCheck, OnChanges, Input, SimpleChanges} from '@angular/core';

import {Log} from "ng2-logger/browser";





@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements  DoCheck, OnChanges, AfterViewChecked {
  logger: any  = Log.create('Test2Component');
  @Input() buttonText: { text: string};
  constructor(){
    this.logger.color = 'pink';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges');
  }

  ngAfterViewChecked(): void {
    this.logger.data('AfterViewChecked');
  }
  clickTestButton(): any{
    this.logger.data('click test button');
  }
}
