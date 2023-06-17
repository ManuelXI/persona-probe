import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../core/services/questions.service';
import { EvaluationService } from '../core/services/evaluation.service';
import { Question } from '../core/types/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
})
export class TestPageComponent implements OnInit {
  questions: Question[] = [];
  isSubmitDisabled: boolean = true;

  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questions = [...this.questionsService.getQuestions()];
    this.checkSubmitButtonState();
  }

  selectAnswer(question: Question, answerId: number): void {
    question.selectedAnswerId = answerId;
    this.checkSubmitButtonState();
  }

  checkSubmitButtonState(): void {
    this.isSubmitDisabled = this.questions.some(
      (question) => question.selectedAnswerId === null
    );
  }

  finishTest(): void {
    this.router.navigate(['/results'], {
      state: {
        personalityType: this.evaluationService.evaluatePersonalityTrait(
          this.questions
        ),
      },
    });
  }

  getLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }
}
