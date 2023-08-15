import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  onViewApart() {
    this.router.navigateByUrl('home');
  }
  constructor(private router: Router) {}
}
