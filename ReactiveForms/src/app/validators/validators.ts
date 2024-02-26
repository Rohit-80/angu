import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { promises } from "dns";
import { Observable, of } from "rxjs";

export const noSpaceAllowed =(control: AbstractControl): { [key: string]: boolean } | null=>{
     if(control.value != null && control.value.indexOf(' ') != -1) return {sp : true};
     return null;
}

// export const nousernameallowed = (control : AbstractControl) : { [key: string]: boolean } | null=>{
//      return checkName(control.value);
// }

export class CustomAsyncValidatorDirective implements AsyncValidator {
 
     
      validate(control: AbstractControl): Observable<ValidationErrors|null> {
        let user = ['zig','oggay'];
        if (user.includes(control.value)) {
        // Emit an object with a validation error.
          return of({ 'notTen': true });
        }
        // Emit null, to indicate no error occurred.
        return of(null);
      
    }
  }
  export function gte(control: AbstractControl) : Promise<any> {

const v:string =control.value;

 let user = ['zig','oggay'];
 

   return new Promise((s)=>{
   
    setTimeout(()=>{
        //  console.log('ok',control.value)
        if (user.includes(control.value)) {
           s({ 'notTen': true });
        }
           s(null);},2000);
    }
   )
   
  
}

// export function noName(control: AbstractControl): 
//   Observable<ValidationErrors | null> {
//     const v: string = control.value;
    

// export const  checkName = (name : string) : { [key: string]: boolean } | null => {
   

  

//         setTimeout(()=>{
//             if(!user.includes(name))
//             return of({notAllowed : true});
//             else of(null);
//         },5000)
        
   

// }