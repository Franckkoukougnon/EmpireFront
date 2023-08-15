import { Component, OnInit } from '@angular/core';
import { AppartService } from '../services/appart/appart.service';
import { appart } from '../share/models/appart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  apparts: appart[] = [];
  constructor(private AptService: AppartService) {}
  ngOnInit(): void {
    this.apparts = this.AptService.getAllAppart();
  }
}
