import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.services';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss'],
})
export class SingleStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}
  name = 'etudiant';
  status = 'status';

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.studentService.getStudentById(+id).name;
    this.status = this.studentService.getStudentById(+id).status;
  }
}
