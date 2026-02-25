import { Component, OnInit } from '@angular/core';
import { ScheduleService, ScheduleItem } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-viewer',
  templateUrl: './schedule-viewer.component.html',
  styleUrls: ['./schedule-viewer.component.css']
})
export class ScheduleViewerComponent implements OnInit {
  scheduleItems: ScheduleItem[] = [];
  loading = true;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    // Mocking project ID '1'
    this.scheduleService.getScheduleByProject('1').subscribe(items => {
      this.scheduleItems = items;
      this.loading = false;
    });
  }
}
