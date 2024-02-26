import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[appValid]',
  standalone: true
})

export class ValidDirective implements AsyncValidator {
 
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