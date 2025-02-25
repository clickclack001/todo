import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  tasks: Task[];
  filter: 'all' | 'active' | 'completed';
  addTask: (text: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      tasks: [],
      filter: 'all',
      addTask: (text) =>
        set((state) => ({
          tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);