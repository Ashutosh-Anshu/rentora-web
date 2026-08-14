export interface ResultError {
  description: string;
}

export interface Result<T> {
  success: boolean;
  message: string;
  data: T;
  errors: ResultError[];
}