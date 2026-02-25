import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  features = [
    { title: 'AI Breakdown', desc: 'Convert your script into a production board in seconds.', icon: 'B' },
    { title: 'Smart Scheduling', desc: 'Auto-optimize your shoot days based on locations.', icon: 'S' },
    { title: 'Team Collaboration', desc: 'Keep your crew in sync with real-time updates.', icon: 'T' }
  ];

  plans = [
    { name: 'Indie', price: '29', features: ['1 Project', 'Basic Scheduling', 'PDF Export'] },
    { name: 'Pro', price: '79', features: ['Unlimited Projects', 'AI Breakdown', 'Team Access'], recommended: true },
    { name: 'Studio', price: 'Custom', features: ['Enterprise Support', 'White-labeling', 'SSO'] }
  ];

  constructor() { }

  ngOnInit(): void { }
}
