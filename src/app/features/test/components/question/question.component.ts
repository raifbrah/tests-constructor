import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AnswerComponent } from '../answer/answer.component';
import { Question } from '../../interfaces/test.interface';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AnswerComponent, FormsModule],
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() questionIndex!: number;
  @Input() testType!: string;

  @Output() removeQuestion = new EventEmitter();

  protected onRemoveQuestion(): void {
    this.removeQuestion.emit();
  }

  protected removeAnswer(answerId: number): void {
    this.question.answers = this.question.answers.filter((answer) => answer.id !== answerId);
  }

  protected addNewAnswer(): void {
    this.question.answers = [
      ...this.question.answers,
      {
        id: Date.now(),
        value: '',
        correct: false,
        checked: false,
      },
    ];
  }
}
