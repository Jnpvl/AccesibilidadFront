import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'dashboard_frontend';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.localStorageService.getToken();
    if (token) {
      const user = this.localStorageService.getUser();
      if (user && user.status === 'Activo') {
        this.router.navigate(['/dashboard/home']);
      } else {
        this.localStorageService.removeToken();
        this.localStorageService.removeUser();
        this.router.navigate(['/auth']);
      }
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
