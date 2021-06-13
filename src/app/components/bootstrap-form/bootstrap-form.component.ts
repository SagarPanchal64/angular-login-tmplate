import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {

  // can also access values of the form using viewchild 
  // @ViewChild('myForm') myForm: NgForm;

  // onSubmit(){
  //   console.log(this.myForm);
  // }

  defaultCourse = 'Angular';
  defaultGender = 'Male';
  genders = [
    {id:1, name:"Male"},
    {id:2, name:"Female"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(fromVal: NgForm){
    console.log(fromVal);
  }

}
