import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UsersPageComponent},
      {path: '**', redirectTo: ''}
    ]),
    NgbModule
  ],
  providers: [UserService],
  declarations: [UsersPageComponent]
})
export class UsersModule { }
