import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TestItem, TestsService } from '../../services/tests.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'tests-table',
  templateUrl: './tests-table.component.html',
  styleUrl: './tests-table.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, DatePipe, MatIconModule, RouterLink],
})
export class TestsTableComponent {
  protected testsType: string = '';

  protected readonly testsService = inject(TestsService);
  private readonly route = inject(ActivatedRoute);
  displayedColumns: string[] = [];

  private updateDisplayedColumns() {
    this.displayedColumns = [
      'name',
      ...(this.testsType === 'passed-tests'
        ? ['passedAt', 'result']
        : ['createdAt', 'participantsCount']),
      'actions',
    ];
  }

  ngOnInit() {
    this.testsType = this.route.snapshot.url.at(-1)?.path ?? '';
    this.updateDisplayedColumns();
  }

  editTest(test: TestItem) {
    console.log('Edit:', test);
  }

  deleteTest(test: TestItem) {
    console.log('Delete:', test);
  }

  openTest(test: TestItem) {
    console.log('Open test', test);
  }
}
