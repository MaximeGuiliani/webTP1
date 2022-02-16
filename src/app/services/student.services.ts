import { Subject } from 'rxjs/internal/Subject';

export class StudentService {
  private students = [
    {
      id: 0,
      name: 'Maxime',
      status: 'present',
    },
    {
      id: 1,
      name: 'Léo-paul',
      status: 'absent',
    },
    {
      id: 2,
      name: 'Damien',
      status: 'present',
    },
  ];
  studentsSubject = new Subject<any[]>();
  emitStudentSubject() {
    this.studentsSubject.next(this.students.slice());
  }

  switchOnAll() {
    for (let student of this.students) {
      student.status = 'present';
      this.emitStudentSubject();
    }
  }

  switchOffAll() {
    for (let student of this.students) {
      student.status = 'absent';
      this.emitStudentSubject();
    }
  }
  switchOnOne(i: number) {
    this.students[i].status = 'present';
    this.emitStudentSubject();
  }

  switchOffOne(i: number) {
    this.students[i].status = 'absent';
    this.emitStudentSubject();
  }

  getStudentById(id: number) {
    const student = this.students.find((s) => {
      return s.id === id;
    });
    return student;
  }

  addStudent(name: string, status: string) {
    const studentObject = {
      id: 0,
      name: '',
      status: '',
    };
    studentObject.name = name;
    studentObject.status = status;
    studentObject.id = this.students[this.students.length - 1].id + 1;
    this.students.push(studentObject);
    this.emitStudentSubject();
  }
}
