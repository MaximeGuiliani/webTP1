import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../services/student.services';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss'],
})
export class StudentViewComponent implements OnInit, OnDestroy {
  isAuth = false;

  studentSubscription: Subscription;
  lastUpdate = new Date();

  constructor(private studentService: StudentService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnDestroy(): void {
    this.studentSubscription.unsubscribe();
  }

  @Input() id: number;

  students = [];

  ngOnInit() {
    this.studentSubscription = this.studentService.studentsSubject.subscribe(
      (students: any[]) => {
        this.students = students;
      }
    );
    this.studentService.emitStudentSubject();
  }

  allPresent() {
    alert('Ils sont tous là !');
    this.studentService.switchOnAll();
  }

  allAbsent() {
    if (confirm('Etes-vous sûr qu’ils sont tous absents ?')) {
      this.studentService.switchOffAll();
    } else {
      return null;
    }
  }
}
