import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Test } from './interfaces/test.interface';
import { QuestionComponent } from './components/question/question.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    QuestionComponent,
  ],
})
export class TestComponent {
  @Input() testType: 'create' | 'edit' | 'passing' = 'create';

  protected readonly test: Test = {
    id: Date.now(),
    title: 'Email adress',
    author_id: Date.now(),
    created_at: Date.now(),
    questions: [],
  };

  protected addNewQuestion(): void {
    this.test.questions = [
      ...this.test.questions,
      {
        id: Date.now(),
        description: '',
        type: 'multiple',
        order: 3,
        answers: [],
      },
    ];
  }

  protected removeQuestion(removeQuestionId: number): void {
    this.test.questions = this.test.questions.filter(
      (question) => question.id !== removeQuestionId,
    );
  }
}
