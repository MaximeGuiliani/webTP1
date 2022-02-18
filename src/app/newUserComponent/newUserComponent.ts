import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Validators, FormArray } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-newUserComponent',
  templateUrl: './newUserComponnent.html',
})
export class NewUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService
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
    this.httpService.createUser(newUser).subscribe(
      (response) => {
        if (response && response.firstName === 'ok') {
          alert('User crée');
        } else {
          alert('User Existe !');
        }
      },
      (e) => {
        console.log('erreur', e);
      },
      () => {
        this.router.navigate(['/users']);
      }
    );
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
