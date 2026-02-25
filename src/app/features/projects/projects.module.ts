import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProjectListComponent } from './pages/list';
import { CreateProjectComponent } from './pages/create';
import { ProjectDetailsComponent } from './pages/details';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'create', component: CreateProjectComponent },
  { path: ':id', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    ProjectListComponent,
    CreateProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
