import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionsService } from '../core/services/questions.service';
import { EvaluationService } from '../core/services/evaluation.service';
import { Question } from '../core/types/models';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TestPageComponent } from './test-page.component';

describe('TestPageComponent', () => {
  let component: TestPageComponent;
  let fixture: ComponentFixture<TestPageComponent>;
  let questionsService: QuestionsService;
  let evaluationService: EvaluationService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestPageComponent],
      providers: [QuestionsService, EvaluationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageComponent);
    component = fixture.componentInstance;
    questionsService = TestBed.inject(QuestionsService);
    evaluationService = TestBed.inject(EvaluationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve questions on component initialization', () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'How do you feel after attending a crowded social event?',
        answers: [
          { id: 1, text: 'Drained and in need of alone time' },
          { id: 2, text: 'Energized and enjoy the social interaction' },
        ],
        selectedAnswerId: null,
      },
      {
        id: 2,
        text: 'How do you typically spend your free time?',
        answers: [
          {
            id: 1,
            text: 'Solitary activities like reading or watching movies',
          },
          {
            id: 2,
            text: 'Spending time with others, engaging in group activities',
          },
        ],
        selectedAnswerId: null,
      },
    ];
    spyOn(questionsService, 'getQuestions').and.returnValue(questions);
    component.ngOnInit();
    expect(component.questions).toEqual(questions);
  });

  it('should select an answer for a question', () => {
    const question: Question = {
      id: 1,
      text: 'How do you feel after attending a crowded social event?',
      answers: [
        { id: 1, text: 'Drained and in need of alone time' },
        { id: 2, text: 'Energized and enjoy the social interaction' },
      ],
      selectedAnswerId: null,
    };
    const answerId = 1; // Mock answer ID
    component.selectAnswer(question, answerId);
    expect(question.selectedAnswerId).toBe(answerId);
  });

  it('should disable submit button when no answer is selected', () => {
    component.questions = [
      {
        id: 1,
        text: 'How do you feel after attending a crowded social event?',
        answers: [
          { id: 1, text: 'Drained and in need of alone time' },
          { id: 2, text: 'Energized and enjoy the social interaction' },
        ],
        selectedAnswerId: null,
      },
      {
        id: 2,
        text: 'How do you typically spend your free time?',
        answers: [
          {
            id: 1,
            text: 'Solitary activities like reading or watching movies',
          },
          {
            id: 2,
            text: 'Spending time with others, engaging in group activities',
          },
        ],
        selectedAnswerId: null,
      },
    ];
    component.checkSubmitButtonState();
    expect(component.isSubmitDisabled).toBeTrue();
  });

  it('should enable submit button when an answer is selected for each question', () => {
    component.questions = [
      {
        id: 1,
        text: 'How do you feel after attending a crowded social event?',
        answers: [
          { id: 1, text: 'Drained and in need of alone time' },
          { id: 2, text: 'Energized and enjoy the social interaction' },
        ],
        selectedAnswerId: 1,
      },
      {
        id: 2,
        text: 'How do you typically spend your free time?',
        answers: [
          {
            id: 1,
            text: 'Solitary activities like reading or watching movies',
          },
          {
            id: 2,
            text: 'Spending time with others, engaging in group activities',
          },
        ],
        selectedAnswerId: 2,
      },
    ];
    component.checkSubmitButtonState();
    expect(component.isSubmitDisabled).toBeFalse();
  });

  it('should navigate to the results page on test completion', () => {
    const personalityType = {
      type: 'Introvert',
      description:
        'Introverts tend to be more inward-focused and gain energy from spending time alone.',
      additionalInfo:
        'Introverts often prefer quieter environments and may feel drained by excessive social interactions.',
      strengths: ['Independent', 'Reflective', 'Observant'],
      weaknesses: ['Reserved', 'Prefer solitude'],
      careers: ['Writer', 'Researcher', 'Artist'],
    };

    spyOn(router, 'navigate');
    spyOn(evaluationService, 'evaluatePersonalityTrait').and.returnValue(
      personalityType
    );
    component.questions = [
      {
        id: 1,
        text: 'How do you feel after attending a crowded social event?',
        answers: [
          { id: 1, text: 'Drained and in need of alone time' },
          { id: 2, text: 'Energized and enjoy the social interaction' },
        ],
        selectedAnswerId: null,
      },
      {
        id: 2,
        text: 'How do you typically spend your free time?',
        answers: [
          {
            id: 1,
            text: 'Solitary activities like reading or watching movies',
          },
          {
            id: 2,
            text: 'Spending time with others, engaging in group activities',
          },
        ],
        selectedAnswerId: null,
      },
    ];
    component.finishTest();
    expect(router.navigate).toHaveBeenCalledWith(['/results'], {
      state: { personalityType },
    });
  });

  it('should return the correct letter for the index', () => {
    const index = 0;
    const expectedLetter = 'A';
    const letter = component.getLetter(index);
    expect(letter).toEqual(expectedLetter);
  });
});
