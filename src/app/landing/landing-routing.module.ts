import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    // children: [
    //   {
    //     loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInModule),
    //     path: 'sign-in',
    //   },
    // ],
    component: LandingComponent,
    path: '',
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class LandingRoutingModule { }
