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
  toggleTask: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
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
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        })),
      setFilter: (filter) => set({ filter }),
      editTask: (id, newText) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, text: newText } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter(task => task.id !== id)
        }))
    }),
    {
      name: 'todo-storage',
    }
  )
);