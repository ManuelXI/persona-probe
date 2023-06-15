export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  selectedAnswerId: number | null;
}

export interface Answer {
  id: number;
  text: string;
}

export interface PersonalityType {
  type: string;
  description: string;
  additionalInfo: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}
