import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LandingLayoutComponent } from './core/components/layout/landing-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth').then(m => m.AuthModule)
  },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard').then(m => m.DashboardModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects').then(m => m.ProjectsModule)
      },
      {
        path: 'schedules',
        loadChildren: () => import('./features/schedules').then(m => m.SchedulesModule)
      },
      {
        path: 'scripts',
        loadChildren: () => import('./features/scripts').then(m => m.ScriptsModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
