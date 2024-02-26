import { Component, Input, OnInit } from '@angular/core';

interface FoodInt{
   x : number,
   y : number
}
@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent implements OnInit {

  @Input() SHeight : number = 0;
  @Input() EHeight : number = 0;
  @Input() SWidth : number = 0;
  @Input() EWidth : number = 0;

    Food : FoodInt[]  = []

    ngOnInit(){
    }

    createFood(){
      let x = Math.ceil(  (Math.random()*this.EWidth)%this.EWidth  );
      let y = Math.ceil(( Math.random()*this.EHeight )%this.EHeight );
      this.Food.push({x : x,y : y});
      console.log(x,y)
    }

    removeFood(){
       this.Food.pop();
    }
}
