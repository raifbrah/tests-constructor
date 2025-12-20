import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer } from '../../interfaces/test.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
})
export class AnswerComponent {
  @Input() answer!: Answer;
  @Input() testType!: string;
  @Input() questionType!: string;
  @Input() questionId!: number;
  @Output() removeAnswer = new EventEmitter();

  protected onRemoveAnswer(): void {
    this.removeAnswer.emit();
  }
}
