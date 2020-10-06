import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {Log} from "ng2-logger/browser";
import {TestService} from "../test.service";
import {BehaviorSubject} from "rxjs/index";

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnePageComponent implements DoCheck, OnChanges, AfterViewChecked {
  logger: any = Log.create('OnePageComponent');
  buttonText = {text: 'gomb'};
  buttonText$: BehaviorSubject<{text: string}>;
streamMode = false;
  constructor(private testService: TestService,
              private cdr: ChangeDetectorRef) {

    this.logger.color = 'silver';
    this.buttonText$ = this.testService.data$;
    this.testService.data$.subscribe(buttonText => {
      this.buttonText = buttonText;
      this.cdr.markForCheck();
    });
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

  clickTestButton(): any {
    this.logger.data('Click test button');
  }

  changeTextButton(): any {
    this.buttonText = {text: new Date().toTimeString()};
   // this.buttonText.text = new Date().toTimeString();
  }
  setStreamMode($event: Event, streamMode: boolean): any{
    $event.stopPropagation();
    $event.preventDefault();
    this.streamMode = streamMode;
  }
}
