import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navItems = [
    { label: 'Dashboard', icon: 'D', route: '/app/dashboard' },
    { label: 'Projects', icon: 'P', route: '/app/projects' },
    { label: 'Schedules', icon: 'S', route: '/app/schedules' },
    { label: 'Scripts', icon: 'Sc', route: '/app/scripts' },
    { label: 'Team', icon: 'T', route: '/app/team' },
    { label: 'Settings', icon: 'Se', route: '/app/settings' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
