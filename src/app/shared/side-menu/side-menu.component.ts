import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']  
})
export class SideMenuComponent {
  isCollapsed = false;
  public menuItems: any[] = [];
  user: any;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.user = this.localStorageService.getUser();

    this.menuItems = routes
      .map(route => route.children ?? [])
      .flat()
      .filter(route => route && route.path)
      .filter(route => !route.path?.includes(':'));

    if (this.user && this.user.role !== 'administrador') {
      this.menuItems = this.menuItems.filter(item => item.path !== 'usuarios');
    }
  }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
    this.localStorageService.removeToken();
    this.localStorageService.removeUser();
    this.router.navigate(['/auth']);
  }
}
