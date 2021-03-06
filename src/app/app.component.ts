import {AfterViewChecked, Component, DoCheck, OnChanges, SimpleChanges} from "@angular/core";
import {Log} from "ng2-logger/browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck, OnChanges, AfterViewChecked {
  logger: any = Log.create('AppComponent');
  navBarItems: { name: string, url: string }[] = [
    {name: 'home', url: 'home'},
    {name: ' one', url: 'one'}
  ];

  constructor() {
    this.logger.color = 'orange';
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
  changeMenu(): any{
    this.navBarItems[0] = {name: new Date().toTimeString(), url: this.navBarItems[0].url};
  }
}
