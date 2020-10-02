import {AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck, OnChanges, AfterViewChecked {
  logger: any = Log.create('HomeComponent');

  constructor() {
    this.logger.color = 'red';
  }

  ngDoCheck(): void {
    this.logger.data ('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges');
  }

  ngAfterViewChecked(): void {
    this.logger.data('AfterViewChecked');
  }
}
