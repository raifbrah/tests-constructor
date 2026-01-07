import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
})
export class ProfileComponent {
  public readonly authService = inject(AuthService);
}
