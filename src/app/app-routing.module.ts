import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LANDING_ROUTE } from './landing';

const routes: Routes = [
  {
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
    path: LANDING_ROUTE,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: LANDING_ROUTE,
  },
  {
    // component: PageNotFoundComponent,
    path: '**',
    redirectTo: LANDING_ROUTE,
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
