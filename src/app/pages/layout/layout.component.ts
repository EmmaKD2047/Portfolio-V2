import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @ViewChild('myCheckbox') myCheckbox!: ElementRef<HTMLInputElement>;
  check: boolean = false;

  checkCheckbox() {
    this.check = this.myCheckbox.nativeElement.checked;
    this.check = true
  }

  uncheckCheckbox() {
    this.check = false;
  }
}
