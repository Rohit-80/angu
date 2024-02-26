import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MoveDirective } from '../../../move.directive';;
import { Observable, from  } from 'rxjs';


@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [MoveDirective,NgFor,NgIf],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.css'
})
export class SnakeComponent implements AfterViewInit,OnInit {


  @Input() SHeight : number = 0;
  @Input() EHeight : number = 0;
  @Input() SWidth : number = 0;
  @Input() EWidth : number = 0;

   Score = 5;


  @ViewChild('snake') snake!: ElementRef;

  food : any[] = [] ;
  arr = [{ x: 50, y: 50 }, { x: 50, y: 40 }];

  intialarr = [...this.arr];
  vis:any = {}
  id1 : any;id2 : any ;
  id3 : any;id4 : any ;

  obs! : Observable<any> ;
  headX: number = 0;
  headY:number = 0;


 ngOnInit(){
   this.arr.reverse()
 }



  ngAfterViewInit() {

    this.obs = new Observable((part)=>{
      document.addEventListener('keyup', (event) => {
        let direction = event.code;
        if (direction == 'ArrowDown') {
          this.clearTInterval();

          this.id1 = setInterval(() => {

            mv('down')

           }, 100);
        } else if (direction == 'ArrowRight') {

          this.clearTInterval();
          this.id2 = setInterval(() => {

            mv('right');

          }, 100);

        }
        else if (direction == 'ArrowUp') {
          this.clearTInterval();

         this.id3 = setInterval(() => {
            mv('up');

           }, 100);

        }
        else if (direction == 'ArrowLeft') {

          this.clearTInterval();
         this.id4 = setInterval(() => {
            mv('left')
          ;
           }, 100);
        }

      });


      let mv = (dir: string) => {

        let xx = this.arr[0].x;
        let yy = this.arr[0].y;

        if (dir == 'down') {
          yy = (20 + yy) % this.EHeight;
        } else if (dir == 'right') {
          xx = (20 + xx) % this.EWidth;
        }else if(dir == 'up'){
          yy = (this.EHeight + yy - 20) % this.EHeight;
        }else if(dir == 'left'){
          xx = (this.EWidth + xx - 20) % this.EWidth;
        }
        changDir(xx, yy, 0);

        // this.obs = new Observable(sub=>{

        //     let x = xx;
        //     let y = yy;
        //     let n = this.arr.length;
        //     let ind = n-1;

        //     while(n--){
        //       sub.next({x,y})
        //       let prev = this.arr[ind];
        //       this.arr[ind].x = x;
        //       this.arr[ind].y = y;
        //       x = prev.x;
        //       y = prev.y;
        //       ind--;
        //     }
        // })
      }


      let changDir= (X: number, Y: number, ind: number) =>{

         if(ind == this.arr.length){
            this.headX =X;
            this.headY = Y;
         }
        if (ind == this.arr.length) return;
           let key = X + '|' + Y;
           this.vis[key] = true;
           part.next({X,Y});

        let prev = this.arr[ind];
        let key2 = prev.x + '|' + prev.y;
         this.vis[key2] = false;
        this.arr[ind] = { x: X, y: Y };


        changDir(prev.x, prev.y, ind + 1);

      }
    });

  }



  clearTInterval(){
    clearInterval(this.id1);
    clearInterval(this.id2)
    clearInterval(this.id3)
    clearInterval(this.id4)
  }


   last = this.arr.length-1;

   addPart(){
    // this.clearTInterval()
     this.arr.push({x : this.arr[this.last].x ,y : this.arr[this.last].y + 10});
   }

  //  add : any;
  //  random(){
  //    let x = Math.ceil( Math.random()*100 + 10);
  //    let y = Math.ceil(Math.random()*100 + 10);
  //     this.add = document.createElement('div');
  //    this.add.innerHTML = '[]';
  //    this.add.style.position = 'absolute'
  //    this.add.style.top = y + 'px';
  //    this.add.style.left = x + 'px';
  //    document.body.append(this.add)



  //    this.food.push({x : x,y : y});
  //  }

  // remove(){
  //   this.add.remove()
  // }


  reset(){
     this.clearTInterval();
     this.arr = [...this.intialarr];
     console.log(this.arr,this.intialarr)
  }

  start(){
    const event = new KeyboardEvent('keyup', {
      code: 'ArrowDown',
    });
   document.dispatchEvent(event);
  }
}

