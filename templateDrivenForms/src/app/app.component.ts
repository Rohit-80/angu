import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TdformsComponent } from './tdforms/tdforms.component';
import { HttpClient , HttpHeaders,HttpParams } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TdformsComponent,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateDrivenForms';
  allfish : any = []
  isupdate : boolean = false;
  ids : string = ''
  @ViewChild('tdform') form! : NgForm;


  constructor(private http : HttpClient){}

  onSubmit(form : NgForm){

     const{name,weight} = form.value;
     let head = new HttpParams().set('jo','ok');
    if(this.isupdate){
      this.http.put('https://meow-4e7bf-default-rtdb.europe-west1.firebasedatabase.app/cat/'+ this.ids +'.json',form.value).subscribe(
        res =>{
          console.log(res)
          this.fetchData();
        }
      )
    }else{
      this.http.post('https://meow-4e7bf-default-rtdb.europe-west1.firebasedatabase.app/cat.json',form.value,{params:head}).subscribe(
        res =>{
          console.log(res)
          this.fetchData();
        }
      );
    }


    this.isupdate = false;
  }


  fetchData(){
    let head = new HttpParams().set('jo','ok');
    this.http.get<{[key : string] : {}}>('https://meow-4e7bf-default-rtdb.europe-west1.firebasedatabase.app/cat.json',{params:head})
   .pipe(map((res =>{
       let product = [];
      for(let key in res){
           product.push({...res[key],id:key})
      }
      return product
   })))
    .subscribe((res)=>{
      this.allfish = res;
    },(err)=>{
       console.log(err)
    })
  }

    DeleteCat(id:string){
        this.http.delete('https://meow-4e7bf-default-rtdb.europe-west1.firebasedatabase.app/cat/'+ id +'.json').subscribe()
        console.log(id)
    }

    UpdateCat(id:string){
       let obj = this.allfish.find((item:{id : string,name : string,weight : string}) =>item.id == id);
        this.form.setValue({
          name : obj.name,
          weight : obj.weight
        })
        this.ids = id;
        this.isupdate = true;
    }
}
