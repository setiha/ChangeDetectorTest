import {AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component  implements DoCheck, OnChanges, AfterViewChecked {
  logger: any  = Log.create('Test1Component');

  constructor(){
    this.logger.color = '#333';
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

}
