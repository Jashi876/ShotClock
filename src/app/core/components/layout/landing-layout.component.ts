import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-layout',
  template: `
    <div class="landing-layout">
      <app-navbar></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .landing-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
    }
  `]
})
export class LandingLayoutComponent {}
