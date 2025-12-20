export interface Test {
  id: number;
  title: string;
  author_id: number;
  created_at: number;
  questions: Question[];
}

export interface Question {
  id: number;
  description: string;
  type: 'multiple' | 'single';
  order: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  value: string;
  correct: boolean;
  checked: boolean;
}
