import {
  AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],

})
export class NavbarItemComponent implements DoCheck, OnChanges, AfterViewChecked {
  @Input() url: string;
  @Input() text: string;

  logger: any  = Log.create('NavbarItemComponent');

  constructor(){
    this.logger.color = 'darkblue';
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
