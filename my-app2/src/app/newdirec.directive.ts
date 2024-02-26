import { Directive, ElementRef, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[newdir]',
  standalone: true
})
export class NewdirecDirective {

  private hasView = false;

  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
    Ele : ElementRef
  ) {
    Ele.nativeElement.style.color = 'red'
    //  console.log(templateRef)
  }



}
