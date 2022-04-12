import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  routes = [
    {
      url: '/movies',
      label: 'Movies',
    },
    {
      url: '/tvShows',
      label: 'TV Shows',
    },
    {
      url: '/series',
      label: 'Series',
    },
  ];

  ngOnInit(): void {}
}
