import { Routes } from '@angular/router';
import { RegisterMember } from './register-member/register-member';
import { MemberList } from './member-list/member-list';

export const routes: Routes = [

    {
    path: 'register',
    component: RegisterMember
  },
  {
    path: 'members',
    component: MemberList
  }
];
