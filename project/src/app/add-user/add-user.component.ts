import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(4)]], // Access 'name' property using bracket notation
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }


  get f() { return this.userForm.controls; }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    console.log('Form submitted:', this.userForm.value);
  }

}
