import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ScriptUploadComponent } from './pages/upload/script-upload.component';

const routes: Routes = [
  { path: '', component: ScriptUploadComponent }
];

@NgModule({
  declarations: [
    ScriptUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ScriptsModule { }
