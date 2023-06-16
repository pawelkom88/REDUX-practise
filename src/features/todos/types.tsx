export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export interface TodoState {
  entities: Todo[];
  status: null | boolean;
}
