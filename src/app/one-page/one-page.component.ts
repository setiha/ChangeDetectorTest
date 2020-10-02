import {AfterViewChecked, Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent implements DoCheck, OnChanges, AfterViewChecked {
  logger: any  = Log.create('OnePageComponent');

  constructor(){
    this.logger.color = 'silver';
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
