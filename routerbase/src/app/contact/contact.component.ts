import { Component, ElementRef, NgModule, TemplateRef, ViewChild, inject  , AfterViewInit ,AfterViewChecked, OnInit, ViewRef, ViewContainerRef, OnChanges} from '@angular/core';
import { AuthguardService } from '../services/authguard.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {

  authguard : AuthguardService = inject(AuthguardService)


 name : string = '';
 mail : string = '';
 isSubmited : boolean = false;
  
   OnSubmit(){
       this.isSubmited = true;
  }

  canExit(){
    if((this.name || this.mail ) && !this.isSubmited){
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
  }
}
