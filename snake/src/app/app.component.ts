import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MoveDirective } from './move.directive';
// import { clearInterval } from 'timers';
import { TimeoutInfo } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { BoardComponent } from './board/board/board.component';
import {MatButtonModule} from '@angular/material/button';
import { FoodComponent } from './board/board/food/food.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BoardComponent,MatButtonModule,FoodComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

