import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experience = [
    {
      timeline: 'Dec 2023 - Present',
      logo: 'assets/globus_logo.png',
      jobTitle: 'Frontend Developer',
      company: 'Globus Bank',
      description: '',
      tags: ['HTML', 'CSS', 'Angular', 'TypeScript', 'StencilJS'],
    },
    {
      timeline: 'Feb 2020 - July 2020',
      logo: 'assets/nnpc_logo.svg',
      jobTitle: 'IT Support Specialist',
      company: 'Nigerian Petroleum Development Company Limited',
      description: '',
    },
  ];
}
