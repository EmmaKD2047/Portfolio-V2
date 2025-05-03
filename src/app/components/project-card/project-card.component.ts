import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string = 'Portfolio';
  @Input() imageSrc: string = '';
  @Input() personImageSrc: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
  @Input() link: string = '#';

  ngOnInit() {
    console.log(this.imageSrc)
  }
}
