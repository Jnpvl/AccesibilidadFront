import { Component, EventEmitter, Output } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-home',
  imports: [TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() toggleMenu = new EventEmitter<void>();

  onToggleMenu() {
    this.toggleMenu.emit(); 
  }
}
