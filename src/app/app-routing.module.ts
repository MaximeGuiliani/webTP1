import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four.component';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserListComponent } from './models/UserListComponent';
import { NewUserComponent } from './newUserComponent/newUserComponent';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'students',
    canActivate: [AuthGuard],
    component: StudentViewComponent,
  },
  {
    path: 'students/:id',
    canActivate: [AuthGuard],
    component: SingleStudentComponent,
  },
  { path: 'users', component: UserListComponent },

  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditStudentComponent },

  { path: 'not-found', component: FourOhFourComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), FormsModule],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

export const routedComponents = [StudentViewComponent, AuthComponent];
