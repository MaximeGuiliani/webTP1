import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four.component';
import { StudentService } from './services/student.services';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserListComponent } from './models/UserListComponent';
import { NewUserComponent } from './newUserComponent/newUserComponent';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    SingleStudentComponent,
    FourOhFourComponent,
    EditStudentComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StudentService,
    AuthService,
    AuthGuard,
    SingleStudentComponent,
    FormsModule,
    HttpService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
