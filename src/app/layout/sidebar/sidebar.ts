import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  sidebarElements = [
    {
      id: 0,
      name: 'Dashboard',
      icon: 'dashboard',
      component: '',
      route: '/dashboard',
    },
    {
      id: 1,
      name: 'Activities',
      icon: 'directions_run',
      component: '',
      route: '',
    },
    {
      id: 2,
      name: 'Statistics',
      icon: 'bar_chart',
      component: '',
      route: '',
    },
    {
      id: 3,
      name: 'Groups',
      icon: 'groups',
      component: '',
      route: '',
    },
    {
      id: 4,
      name: 'Maps',
      icon: 'map',
      component: '',
      route: '',
    },
    {
      id: 5,
      name: 'Equipment',
      icon: 'sports_bike',
      component: '',
      route: '',
    },
    {
      id: 6,
      name: 'Goals',
      icon: 'flag',
      component: '',
      route: '',
    },
    {
      id: 7,
      name: 'Settings',
      icon: 'settings',
      component: '',
      route: '',
    },
  ];
}
