import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user-services';
import { Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-newUserComponent',
  templateUrl: './newUserComponnent.html',
})
export class NewUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  userForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  getOptions(): FormArray {
    return this.userForm.get('options') as FormArray;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      diploma: ['', Validators.required],
      options: this.formBuilder.array([]),
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['diploma'],
      formValue['options'] ? formValue['options'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  onAddOption() {
    const newOptionControl = this.formBuilder.control(
      null,
      Validators.required
    );
    this.getOptions().push(newOptionControl);
  }
}
