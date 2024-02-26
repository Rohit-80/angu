import { Directive, TemplateRef, ViewContainerRef, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[direct]',
  standalone: true
})
export class MydirectiveDirective {

  constructor()  {
  //  this.Ele.nativeElement.style.color = 'red';
    console.log('hi');
    // console.log(this.viewContainer);
    // console.log(this.tempRef);

   }
}
