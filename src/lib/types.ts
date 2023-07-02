export interface Subtask {
  name: string;
  id: string;
  // taskId: string;
  isCompleted: boolean;
}

export interface Task {
  name: string;
  taskId: string;
  // columnId: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Column {
  name: string;
  columnId: string;
  tasks: Task[];
}

export interface Board {
  name: string;
  boardId: string;
  columns: Column[];
}
