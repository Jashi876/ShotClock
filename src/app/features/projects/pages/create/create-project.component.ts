import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectForm!: FormGroup;
  loading = false;

  projectTypes = ['Feature Film', 'Short Film', 'Commercial', 'Documentary', 'Music Video'];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      status: ['Planning', Validators.required]
    });
  }

  onSubmit() {
    if (this.projectForm.invalid) return;

    this.loading = true;
    this.projectService.createProject(this.projectForm.value).subscribe({
      next: () => {
        this.router.navigate(['/projects']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
