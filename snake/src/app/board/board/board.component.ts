import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import {MatGridListModule,} from '@angular/material/grid-list';
import {MatButtonModule,MatButton} from '@angular/material/button';
import { SnakeComponent } from './snake/snake.component';
import { NgFor, NgIf } from '@angular/common';
import { FoodComponent } from './food/food.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    MatGridListModule,
    SnakeComponent,
    MatButtonModule,
    FoodComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit , AfterViewInit {
     Score = 0

     SHeight = 10;
     SWidth = 10;
     EHeight : number = 500;
     EWidth :  number = 1200;

    @ViewChild(FoodComponent) foodcmp! : FoodComponent;
    @ViewChild(SnakeComponent) snakecmp! : SnakeComponent;


    ngOnInit(){ }


     add : any;

      ngAfterViewInit(){
        console.log(this.snakecmp.obs)
        this.snakecmp?.obs.subscribe((data)=>{
          // console.log(data,data['X'],data['Y'])
          if(data['X'] && data['Y']){


              if(Math.abs(this.foodcmp.Food[0]?.x - data['X']) <= 30 && Math.abs(this.foodcmp.Food[0]?.y - data['Y']) <= 30  ){
                  console.log('match')
                  // this.snakecmp.clearTInterval()
                  this.Score += this.snakecmp.Score
                  this.snakecmp.addPart()
                  this.foodcmp.removeFood()
                  this.add.remove()
                  this.addFoo();
              }
               let key = this.snakecmp.headX + "|" + this.snakecmp.headY;
                if(this.snakecmp.vis[key]){
                  this.snakecmp.reset()
                  // this.snakecmp.Score = 0;
                  this.Score = 0;
                }
            }
        })

        this.addFoo()

      }


      addFoo(){

       this.foodcmp.createFood();
         let x =  this.foodcmp.Food[0].x;
         let y =  this.foodcmp.Food[0].y;
       this.add = document.createElement('span');
       this.add.innerHTML = '[O]';
       this.add.style.position = 'absolute'
       this.add.style.top = y + 'px';
       this.add.style.left = x + 'px';
       document.getElementById('board')?.append(this.add)

      }

      stopBtn(){
        this.snakecmp.clearTInterval()
      }

      resetBtn(){
        this.snakecmp.reset()
      }

      startBtn(){
       this.snakecmp.start()

      }

}
