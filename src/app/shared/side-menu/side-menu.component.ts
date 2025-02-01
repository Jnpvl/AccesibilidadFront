import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule,CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  isCollapsed = false;
  public menuItems = routes.map(route => route.children ?? [])

  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))


  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
