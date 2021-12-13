export interface Question {
  question: string;
  student: string;
  tags: string;
  class: string;
  submitedAt?: string;
  answered?: boolean;
  answeredAt?: string;
  answer?: string;
  answerner_id?: number;
}
export interface Answer {
  answer: string;
  answerner_id: number;
}
export interface User {
  name: string;
  className: string;
  token: string;
}
