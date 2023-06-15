import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let questionService: QuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    questionService = TestBed.inject(QuestionsService);
  });

  it('should be created', () => {
    expect(questionService).toBeTruthy();
  });

  it('should return an array of questions', () => {
    const questions = questionService.getQuestions();
    expect(questions.length).toBeGreaterThan(0);
  });
});
