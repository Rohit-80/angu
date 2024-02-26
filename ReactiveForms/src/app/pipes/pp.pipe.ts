import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pp',
  pure:false,
  standalone: true
})
export class PpPipe implements PipeTransform {
  
  transform(value : any,div : any)  {
    console.log('called');
     return value + 1;
  }

}
