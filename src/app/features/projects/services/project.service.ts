import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface Project {
  id: string;
  name: string;
  type: string;
  status: string;
  startDate: string;
  description: string;
  thumbnail?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projectsSubject.asObservable();

  constructor() {
    const initialProjects: Project[] = [
      { id: '1', name: 'Cyberpunk 2077 Short', type: 'Sci-Fi', status: 'In Production', startDate: '2024-10-15', description: 'A short film set in Night City.' },
      { id: '2', name: 'Mountain Dew Commercial', type: 'Ad', status: 'Pre-Production', startDate: '2024-11-02', description: 'Action-packed soft drink commercial.' },
      { id: '3', name: 'The Silent Forest', type: 'Horror', status: 'Planning', startDate: '2025-01-20', description: 'Experimental horror project.' }
    ];
    this.projectsSubject.next(initialProjects);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projectsSubject.value).pipe(delay(500));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projectsSubject.value.find(p => p.id === id);
    return of(project).pipe(delay(500));
  }

  createProject(project: Omit<Project, 'id'>): Observable<Project> {
    const newProject = {
      ...project,
      id: Math.random().toString(36).substr(2, 9)
    };
    const currentProjects = this.projectsSubject.value;
    this.projectsSubject.next([...currentProjects, newProject]);
    return of(newProject).pipe(delay(1000));
  }
}
