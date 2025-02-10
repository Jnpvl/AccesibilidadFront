import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class authguardGuard  implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const token = this.localStorageService.getToken();
    if (token) {
      return true;
    } else {
      return this.router.parseUrl('/auth');
    }
  }
}