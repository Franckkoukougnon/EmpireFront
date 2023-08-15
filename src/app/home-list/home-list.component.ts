import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartService } from '../services/appart/appart.service';
import { appart } from '../share/models/appart';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  onViewApartList() {
    this.routes.navigateByUrl('home');
  }
  appart: appart | undefined;

  constructor(
    private routes: Router,
    private route: ActivatedRoute,
    private aptService: AppartService
  ) {}

  ngOnInit(): void {
    const appartId = this.route.snapshot.paramMap.get('id');
    if (appartId) {
      const id = parseInt(appartId, 10);
      this.appart = this.aptService.getAllAppart().find((a) => a.id === id);
    }
  }
}
