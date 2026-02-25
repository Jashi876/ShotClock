import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-generator',
  templateUrl: './schedule-generator.component.html',
  styleUrls: ['./schedule-generator.component.css']
})
export class ScheduleGeneratorComponent implements OnInit {
  generating = false;

  constructor(
    private scheduleService: ScheduleService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onGenerate() {
    this.generating = true;
    this.scheduleService.generateSchedule('1').subscribe(() => {
      this.router.navigate(['/schedules/viewer']);
    });
  }
}
