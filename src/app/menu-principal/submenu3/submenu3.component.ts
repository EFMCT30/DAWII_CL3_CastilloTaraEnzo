import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-submenu3',
  templateUrl: './submenu3.component.html',
  styleUrls: ['./submenu3.component.css']
})
export class Submenu3Component implements OnInit {
  locationsPar: any[] = [];

  constructor(private locationService: ApiService) {}

  ngOnInit() {
    this.locationService.getLocationsWithIDPar().subscribe((data) => {
      this.locationsPar = data.results.filter((location: any) => location.id % 2 === 0);
    });
  }
}
