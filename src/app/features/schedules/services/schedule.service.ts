import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ScheduleItem {
  id: string;
  projectId: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  type: 'Shoot' | 'Meeting' | 'Edit' | 'Other';
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private mockSchedule: ScheduleItem[] = [
    { id: '1', projectId: '1', title: 'Location Scouting', startTime: '2024-10-20T09:00:00', endTime: '2024-10-20T12:00:00', location: 'Downtown LA', type: 'Other' },
    { id: '2', projectId: '1', title: 'Main Unit - Scene 1-5', startTime: '2024-10-22T06:00:00', endTime: '2024-10-22T18:00:00', location: 'Studio A', type: 'Shoot' },
    { id: '3', projectId: '1', title: 'Wrap Party', startTime: '2024-10-25T20:00:00', endTime: '2024-10-25T23:59:00', location: 'The Night Club', type: 'Other' }
  ];

  constructor() { }

  getScheduleByProject(projectId: string): Observable<ScheduleItem[]> {
    return of(this.mockSchedule.filter(item => item.projectId === projectId)).pipe(delay(500));
  }

  generateSchedule(projectId: string): Observable<ScheduleItem[]> {
    // Mock generation logic: simply return the existing ones or new ones
    return of(this.mockSchedule).pipe(delay(2000));
  }
}
