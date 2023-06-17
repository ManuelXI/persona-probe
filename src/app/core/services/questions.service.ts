import { Injectable } from '@angular/core';
import { Question } from '../types/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Question[] = [
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
        { id: 1, text: 'Solitary activities like reading or watching movies' },
        {
          id: 2,
          text: 'Spending time with others, engaging in group activities',
        },
      ],
      selectedAnswerId: null,
    },
    {
      id: 3,
      text: 'How do you handle meeting new people?',
      answers: [
        { id: 1, text: 'Feel a bit shy or reserved initially' },
        { id: 2, text: 'Feel excited and eager to meet new people' },
      ],
      selectedAnswerId: null,
    },
    // {
    //   id: 4,
    //   text: 'In social gatherings, do you prefer being in the center of attention or observe from the sidelines?',
    //   answers: [
    //     { id: 1, text: 'Prefer observing from the sidelines' },
    //     { id: 2, text: 'Enjoy being in the center of attention' },
    //   ],
    //   selectedAnswerId: null,
    // },
  ];

  constructor() {}

  getQuestions(): Question[] {
    this.questions.forEach((question) => {
      question.selectedAnswerId = null;
    });
    return this.questions;
  }
}
