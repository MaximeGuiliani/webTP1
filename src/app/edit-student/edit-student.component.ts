import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.services';
import { Router } from '@angular/router';

@Component({
  selector: './edit-student.component.ts',
  templateUrl: './edit-student.component.html',
})
export class EditStudentComponent {
  constructor(private studentService: StudentService, private router: Router) {}
  defaultStatus = 'absent';

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.studentService.addStudent(name, status);
    this.router.navigate(['students']);
  }
}
