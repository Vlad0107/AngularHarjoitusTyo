import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<string>('61.49008803352003');
  private messageSource2 = new BehaviorSubject<string>('23.761245727539062 ');
  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();

  constructor() { }

  changeMessage(message: string,message2: string) {
    this.messageSource.next(message)
    this.messageSource2.next(message2)
    console.log(message)
  }

}