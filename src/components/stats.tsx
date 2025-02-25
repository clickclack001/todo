import { useTodoStore } from '@/store/todo-store';


export const Stats = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <b>{remainingTasks}</b> items left
    </div>
  );
};