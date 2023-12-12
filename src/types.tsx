export enum difficultyType {
  easy = 0,
  medium = 1,
  hard = 2
}

export interface todoType {
  id: number;
  title: string;
  done: boolean;
  category: string;
  difficulty: difficultyType;
}

export interface todoFormPropsType {
  todo: todoType;
  deleteTodo: (deleteId: number) => void;
  toggleTodoDone: (toggleId: number) => void;
}
