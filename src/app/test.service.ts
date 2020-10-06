import {Injectable} from "@angular/core";
import {BehaviorSubject, timer} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  data$ = new BehaviorSubject<{text: string}>({text: new Date().toTimeString()});

  constructor() {
    /*const intervalTime = timer(5000, 5000);
    const subscribe = intervalTime.subscribe(() => this.data$.next({text: new Date().toTimeString()}));
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 20000);*/
  }
}
