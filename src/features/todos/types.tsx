export interface Todos {
    id: number;
    name: string;
    completed: boolean;
  }
  
  export interface TodoState {
    entities: Todos[];
    status: null | boolean;
  }