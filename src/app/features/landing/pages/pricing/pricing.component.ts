import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  plans = [
    {
      name: 'Starter',
      price: '0',
      features: ['Up to 1 project', 'Basic script analysis', 'Community support'],
      recommended: false
    },
    {
      name: 'Professional',
      price: '49',
      features: ['Unlimited projects', 'Advanced AI scheduling', 'Priority email support', 'Export to PDF/CSV'],
      recommended: true
    },
    {
      name: 'Studio',
      price: 'Custom',
      features: ['Custom workflows', 'Team management', 'API access', 'Dedicated account manager'],
      recommended: false
    }
  ];
}
