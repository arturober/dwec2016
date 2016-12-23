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
    ])
  ],
  providers: [UserService],
  declarations: [UsersPageComponent]
})
export class UsersModule { }
