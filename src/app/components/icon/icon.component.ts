import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconClass!: string; // e.g., 'fa-home'
  @Input() size!: string; // e.g., '24px'
  @Input() color!: string; // e.g., 'red'
}
