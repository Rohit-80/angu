import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class ServicService {

  constructor() {

   }

   DoSubscribe(){
      console.log('Congratulations you have been subscribed!');
   }

  //  eventer = new EventEmitter;
   eventer = new Subject<string>;
   subs(){
     this.eventer.next('Rohit')
   }

}
