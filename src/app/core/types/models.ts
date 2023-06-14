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
