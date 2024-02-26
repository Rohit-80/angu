import { Directive, ElementRef, Input, OnInit, inject, input } from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appMove]',
  standalone: true,

})
export class MoveDirective implements OnInit{

   @Input() obj : any;
   @Input() add : any;
   @Input() foods : any;
  constructor(private ele : ElementRef) { }
   cmp : AppComponent = inject(AppComponent)
  ngOnInit(){
     this.ele.nativeElement.style.position = 'absolute';
     this.ele.nativeElement.style.left = this.obj.x + 'px';
     this.ele.nativeElement.style.top = this.obj.y + 'px';
    //  console.log(this.foods)
    //  for(let x of this.foods){
    //   console.log(x,'s')
    //     if(x.x - 20 <= this.obj.x && this.obj.x <= x.x + 20 && x.y - 20 <= this.obj.y && this.obj.y <= x.y + 20 ){
    //        console.log('3333333333333333333333333333333333333333333i')
    //       this.cmp.addPart()
    //       this.cmp.food.pop()
    //       this.cmp.remove();
    //     }
    //  }
  }

}
