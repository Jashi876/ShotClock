import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleGeneratorComponent } from './pages/generator';
import { ScheduleViewerComponent } from './pages/viewer';
import { TimelineComponent } from './components/timeline';

const routes: Routes = [
  { path: 'generator', component: ScheduleGeneratorComponent },
  { path: 'viewer', component: ScheduleViewerComponent },
  { path: '', redirectTo: 'viewer', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ScheduleGeneratorComponent,
    ScheduleViewerComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SchedulesModule { }
