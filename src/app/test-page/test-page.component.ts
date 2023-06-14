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
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionsService.getQuestions().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      },
      (error: any) => {
        console.error('Error retrieving questions:', error);
      }
    );
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
    // Handle the test completion logic here
    // this.router.navigate(['/results']);
  }

  getLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }
}
