import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss'],
  standalone: false
})
export class DynamicButtonComponent {
  @Input() text = '';
  @Input() href = '';
  @Input() target = '_blank';
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'default' | 'small' = 'default';

  @Output() buttonClick = new EventEmitter<Event>();

  onButtonClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.buttonClick.emit(event);
  }
}
