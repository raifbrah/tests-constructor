import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class AuthComponent {
  authType = '';
  title = '';

  public readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);

  authForm = new FormGroup({
    email: new FormControl('admin@gmail.com', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('root', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  ngOnInit() {
    this.authType = this.route.snapshot.url.at(-1)!.path;
    this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
  }

  login() {
    if (this.authForm.valid) {
      this.authService.login({ ...this.authForm.getRawValue() });
    }
  }

  register() {
    if (this.authForm.valid) {
      this.authService.register({ ...this.authForm.getRawValue() });
    }
  }
}
