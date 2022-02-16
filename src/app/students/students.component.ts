import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../services/student.services';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  @Input() studentName: string;
  @Input() studentStatus: string;
  @Input() index: number;

  constructor(private studentService: StudentService) {}

  @Input() id: number;

  onSwitch() {
    console.log(this.studentStatus === 'present');
    if (this.studentStatus === 'present') {
      this.studentService.switchOffOne(this.id);
    } else if (this.studentStatus === 'absent') {
      this.studentService.switchOnOne(this.id);
    }
  }

  getStatus() {
    return this.studentStatus;
  }

  getColor() {
    if (this.studentStatus === 'present') {
      return 'green';
    } else if (this.studentStatus === 'absent') {
      return 'red';
    }
    return null;
  }

  ngOnInit(): void {}
}
