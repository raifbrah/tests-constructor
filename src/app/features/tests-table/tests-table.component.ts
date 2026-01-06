import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TestsService } from '../../services/tests.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Test } from '../test/interfaces/test.interface';

@Component({
  selector: 'tests-table',
  templateUrl: './tests-table.component.html',
  styleUrl: './tests-table.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, DatePipe, MatIconModule, RouterModule],
})
export class TestsTableComponent {
  public testsType: string = '';

  public readonly testsService = inject(TestsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  displayedColumns: string[] = [];

  private updateDisplayedColumns(): void {
    this.displayedColumns = [
      'name',
      ...(this.testsType === 'passed-tests'
        ? ['passed_at', 'result']
        : ['created_at', 'participants_count']),
      'actions',
    ];
  }

  ngOnInit(): void {
    this.testsType = this.route.snapshot.url.at(-1)?.path ?? '';
    this.updateDisplayedColumns();
  }

  editTest(test: Test): void {
    this.router.navigate(['/test'], { queryParams: { id: test.id, type: 'edit' } });
  }

  deleteTest(test: Test): void {
    this.testsService.deleteTest(test.id);
  }

  openTest(test: Test): void {
    this.router.navigate(['/test'], { queryParams: { id: test.id, type: 'passing' } });
  }
}
