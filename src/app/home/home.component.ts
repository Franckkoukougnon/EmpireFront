import { Component, OnInit } from '@angular/core';
import { AppartService } from '../services/appart/appart.service';
import { appart } from '../share/models/appart';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  onApartDetail(appart: appart) {
    this.router.navigateByUrl(`home/${appart.id}`);
  }
  apparts: appart[] = [];
  constructor(
    private AptService: AppartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.apparts = this.AptService.getAllAppart();
    const appartId = this.route.snapshot.paramMap.get('id');
  }
}
