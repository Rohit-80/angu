import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdforms',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './tdforms.component.html',
  styleUrl: './tdforms.component.css'
})
export class TdformsComponent {

    handleSubmit(form : NgForm){
       console.log(form.form.controls['firstname'])
    }
}
