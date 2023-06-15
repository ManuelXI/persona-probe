import { TestBed } from '@angular/core/testing';

import { EvaluationService } from './evaluation.service';
import { Question } from '../types/models';

describe('EvaluationService', () => {
  let evaluationService: EvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    evaluationService = TestBed.inject(EvaluationService);
  });

  it('should be created', () => {
    expect(evaluationService).toBeTruthy();
  });

  it('should return the correct personality type for an extroverted result', () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 1,
      },
      {
        id: 2,
        text: 'Question 2',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 2,
      },
      {
        id: 3,
        text: 'Question 3',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 2,
      },
    ]; // Sample questions with extroverted answers

    const personalityType =
      evaluationService.evaluatePersonalityTrait(questions);
    expect(personalityType.type).toBe('Extrovert');
  });

  it('should return the correct personality type for an introverted result', () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 1,
      },
      {
        id: 2,
        text: 'Question 2',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 1,
      },
      {
        id: 3,
        text: 'Question 3',
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
        ],
        selectedAnswerId: 2,
      },
    ]; // Sample questions with introverted answers

    const personalityType =
      evaluationService.evaluatePersonalityTrait(questions);
    expect(personalityType.type).toBe('Introvert');
  });
});
