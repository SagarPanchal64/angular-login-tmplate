import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-reactive-form',
  templateUrl: './bootstrap-reactive-form.component.html',
  styleUrls: ['./bootstrap-reactive-form.component.scss'],
})
export class BootstrapReactiveFormComponent implements OnInit {
  constructor() {}

  myReactiveForm: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })    
  }

  onSubmit() {
    console.log('called', this.myReactiveForm);
  }
}
