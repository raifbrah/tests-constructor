import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Answer, Question } from '../../interfaces/test.interface';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { TestsService } from '../../../../services/tests.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
  standalone: true,
  imports: [FormsModule, MatButtonModule, NgClass],
})
export class AnswerComponent {
  @Input() answer!: Answer;
  @Input() testType!: string;
  @Input() question!: Question;
  @Output() removeAnswer = new EventEmitter();

  private readonly testsService = inject(TestsService);

  public onRemoveAnswer(): void {
    this.removeAnswer.emit();
  }

  public saveAnswer() {
    this.testsService.save();
  }
}
