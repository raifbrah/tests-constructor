import { computed, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface User {
  email: string;
  password: string;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser = signal<User | null>(
    JSON.parse(localStorage.getItem('currentUser') || 'null'),
  );
  public isLoggedIn = computed(() => !!this.currentUser());
  public isError = signal<boolean | string>(false);

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  login(credentials: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const isUserLogged = users.some((user: User) => {
      if (user.email === credentials.email && user.password === credentials.password) {
        this.currentUser.set(user);
        return true;
      }
      return false;
    });

    if (isUserLogged) {
      this.setAuth(this.currentUser()!);
      this.router.navigateByUrl(this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/');
      this.isError.set(false);
    } else {
      this.isError.set('Некорректные данные пользователя!');
      console.log(this.isError);
    }
  }

  register(credentials: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const isUserLogged = users.some(
      (user: User) => user.email === credentials.email && user.password === credentials.password,
    );

    if (!isUserLogged) {
      localStorage.setItem('users', JSON.stringify([...users, { ...credentials, id: Date.now() }]));
    }

    this.login({ ...credentials });
  }

  logout(): void {
    this.purgeAuth();
    this.router.navigateByUrl('/login');
  }

  setAuth(user: User) {
    this.currentUser.set({ ...user });
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  purgeAuth(): void {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
  }
}
