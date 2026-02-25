import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  constructor() { }

  uploadScript(file: File): Observable<any> {
    // Mock upload and processing
    return of({
      id: 's1',
      name: file.name,
      scenes: 42,
      characters: 12,
      locations: 8,
      estimatedPages: file.size / 1024 / 2 // Mock estimation
    }).pipe(delay(3000));
  }
}
