import { NgFor, NgIf } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray, FormArrayName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noSpaceAllowed, CustomAsyncValidatorDirective, gte } from '../validators/validators';
import { ValidDirective } from '../validators/valid.directive';
import { PpPipe } from '../pipes/pp.pipe';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,NgFor,ValidDirective,PpPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
 
})
export class FormsComponent implements OnInit , DoCheck{

  value = 0;
  c(){
    this.value++;
  }
  ngDoCheck(): void {
      console.log(this.value)
      this.value++;

  }

  reactiveForm!: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required,noSpaceAllowed,Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null,[Validators.required],gte),
      gender: new FormControl(null),
      country: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        area: new FormControl()
      }),
      skills : new FormArray([
        new FormControl(null,[Validators.required
        ]) 
      ]),

      Experience : new FormArray([
         new FormGroup({
           Company : new FormControl(),
           Years : new FormControl()
         })
      ])
    })
    // this.reactiveForm.addAsyncValidators(gte)

    // this.reactiveForm.get('username')?.valueChanges.subscribe((val)=>{
    //          console.log(val)
    // })
    this.reactiveForm.get('username')?.statusChanges.subscribe((val)=>{
             console.log(val)
    })

    // this.reactiveForm.setValue({
    //    firstname : 'rohit'
    // });

    this.reactiveForm.patchValue({
      firstname : 'Rohit'
    })



  }


  get skillser() : FormArray{
     return this.reactiveForm.get('skills') as FormArray;
  }
  get Experience() : FormArray{
    return this.reactiveForm.get('Experience') as FormArray;
 }
  AddSkill(){
     (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null,Validators.required))
  }
  onSubmit() {
    console.log(this.reactiveForm)
    this.reactiveForm.reset()
  }

  DeleteSkill(id : number){

    (this.reactiveForm.get('skills') as FormArray).removeAt(id)
  }

  AddExperience(){
   const  grp = new FormGroup({
      Company : new FormControl(),
      Years : new FormControl()
    });
    (this.reactiveForm.get('Experience') as FormArray).push(grp)
  }

  DeleteExperience(id : number){
    (this.reactiveForm.get('Experience') as FormArray).removeAt(id)
  }

}
