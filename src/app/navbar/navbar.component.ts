import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input, IterableDiffer,
  IterableDiffers,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {Log} from "ng2-logger/browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements DoCheck, OnChanges, AfterViewChecked, AfterViewInit {
  logger: any = Log.create('NavbarComponent');
  @Input() items: { name: string, url: string }[];
private differ: IterableDiffer<any>
  constructor(private cdr: ChangeDetectorRef,
              private iterableDiffers: IterableDiffers) {
    this.logger.color = 'blue';
    this.differ = this.iterableDiffers.find([]).create(null);
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
    if(this.differ != null){
      const changes = this.differ.diff(this.items);
      if (changes) {
        console.log(changes);
        this.cdr.detectChanges();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges');
  }

  ngAfterViewChecked(): void {
    this.logger.data('AfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
