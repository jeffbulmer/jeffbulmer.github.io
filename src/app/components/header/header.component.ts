import { Component, HostListener } from '@angular/core';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [
            animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ],
  standalone: false
})
export class HeaderComponent {
  pageYPosition = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    this.pageYPosition = window.pageYOffset;
  }
}
