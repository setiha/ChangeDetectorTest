import {
  AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements DoCheck, OnChanges, AfterViewChecked {
  logger: any  = Log.create('NavbarComponent');

  constructor(){
    this.logger.color = 'blue';
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
