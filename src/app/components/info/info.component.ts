import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [CommonModule, NgFor],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  constructor() {}

  infos = [
    {
      title: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.png',
      datePublication: '2020-01-01'
    },
    {
      title: 'React',
      description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      datePublication: '2020-01-02'
    },
    {
      title: 'Vue',
      description: 'Vue.js is a progressive framework for building user interfaces.',
      thumbnail: 'https://vuejs.org/images/logo.png',
      datePublication: '2020-01-03'
    },
    {
      title: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.png',
      datePublication: '2020-01-01'
    },
    {
      title: 'React',
      description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      datePublication: '2020-01-02'
    },
    {
      title: 'Vue',
      description: 'Vue.js is a progressive framework for building user interfaces.',
      thumbnail: 'https://vuejs.org/images/logo.png',
      datePublication: '2020-01-03'
    },
    {
      title: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.png',
      datePublication: '2020-01-01'
    },
    {
      title: 'React',
      description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      datePublication: '2020-01-02'
    },
    {
      title: 'Vue',
      description: 'Vue.js is a progressive framework for building user interfaces.',
      thumbnail: 'https://vuejs.org/images/logo.png',
      
    }
  ];

}
