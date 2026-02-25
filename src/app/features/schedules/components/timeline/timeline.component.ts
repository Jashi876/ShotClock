import { Component, Input, OnInit } from '@angular/core';
import { ScheduleItem } from '../../services/schedule.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() items: ScheduleItem[] = [];

  constructor() { }

  ngOnInit(): void { }
}
