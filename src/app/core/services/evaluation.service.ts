import { Injectable } from '@angular/core';
import { PersonalityType, Question } from '../types/models';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  personalityTypes: { [key: string]: PersonalityType } = {
    Introvert: {
      type: 'Introvert',
      description:
        'Introverts tend to be more inward-focused and gain energy from spending time alone. They are known for their introspective nature and preference for solitude.',
      additionalInfo:
        'Introverts often prefer quieter environments and may feel drained by excessive social interactions. They are excellent listeners and observers, often noticing details that others may overlook. Due to their reflective nature, introverts may take more time to process information and make decisions. They value deep connections and meaningful conversations.',
      strengths: ['Independent', 'Reflective', 'Observant'],
      weaknesses: ['Reserved', 'Prefer solitude'],
      careers: ['Writer', 'Researcher', 'Artist'],
    },
    Extrovert: {
      type: 'Extrovert',
      description:
        'Extroverts tend to be more outward-focused and gain energy from social interactions. They thrive in dynamic environments and enjoy being around people.',
      additionalInfo:
        'Extroverts often enjoy being the center of attention and feel energized by engaging in group activities. They are sociable, outgoing, and have excellent communication skills. Extroverts are known for their ability to think on their feet and make decisions quickly. However, they may seek constant stimulation and can sometimes be impulsive. They are natural networkers and easily connect with others.',
      strengths: ['Outgoing', 'Energetic', 'Adaptable'],
      weaknesses: ['Can be impulsive', 'Seek constant stimulation'],
      careers: ['Salesperson', 'Event Planner', 'Politician'],
    },
  };
  constructor() {}

  evaluatePersonalityTrait(questions: Question[]): PersonalityType {
    const extrovertThreshold = Math.floor(questions.length / 2);

    const extrovertCount = questions.reduce((count, question) => {
      if (question.selectedAnswerId && question.selectedAnswerId === 2) {
        count++;
      }
      return count;
    }, 0);

    if (extrovertCount > extrovertThreshold) {
      return this.personalityTypes['Extrovert'];
    } else {
      return this.personalityTypes['Introvert'];
    }
  }
}
