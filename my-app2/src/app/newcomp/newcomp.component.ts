import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { ServicService } from '../services/servic.service';

@Component({
  selector: 'app-newcomp',
  standalone: true,
  imports: [],
  templateUrl: './newcomp.component.html',
  styleUrl: './newcomp.component.css'
})
export class NewcompComponent implements OnChanges {

  //  constructor(private service : ServicService){

  //  }


   @Input('papaValue') Change : string = 'Default';

   @Output() totalOut = new EventEmitter();
   @Output() sourceOutput : string = 'child';

   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
 }
 service : ServicService = inject(ServicService)
   CallPapa(){
     this.totalOut.emit({name : 'beta'})
   }

   sub(){
       this.service.DoSubscribe()
   }


}
