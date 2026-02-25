import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {
  currentUser: User | null = null;
  stats = [
    { label: 'Active Projects', value: '12', icon: 'P', color: '#6366f1' },
    { label: 'Upcoming Shoots', value: '5', icon: 'S', color: '#a855f7' },
    { label: 'Team Members', value: '24', icon: 'T', color: '#10b981' },
    { label: 'Storage Used', value: '45%', icon: 'D', color: '#f59e0b' }
  ];

  recentProjects = [
    { name: 'Cyberpunk 2077 Short', type: 'Sci-Fi', status: 'In Production', date: '2024-10-15' },
    { name: 'Mountain Dew Commercial', type: 'Ad', status: 'Pre-Production', date: '2024-11-02' },
    { name: 'The Silent Forest', type: 'Horror', status: 'Planning', date: '2025-01-20' }
  ];

  quickActions = [
    { label: 'New Project', icon: '+', route: '/projects/create' },
    { label: 'Generate Schedule', icon: 'G', route: '/schedules' },
    { label: 'Upload Script', icon: 'U', route: '/scripts' }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
