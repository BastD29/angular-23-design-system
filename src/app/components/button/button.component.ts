import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText!: string;
  @Input() buttonClass!: string;
  @Input() buttonColor!: string; // New input for button color

  @Input() iconClass!: string;
  @Input() iconSize!: string;
  @Input() iconColor!: string;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
