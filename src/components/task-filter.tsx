import { useTodoStore } from '@/store/todo-store';
import { Button } from '@/components/ui/button';
import {Trash2} from "lucide-react";

export const TaskFilter = () => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  return (
    <div className="flex">
      <div className="flex space-x-2 mb-4">
        <Button
          variant={filter === 'all' ? 'outline' : 'secondary'}
          onClick={() => setFilter('all')}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'outline' : 'secondary'}
          onClick={() => setFilter('active')}
          size="sm"
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'outline' : 'secondary'}
          onClick={() => setFilter('completed')}
          size="sm"
        >
          Completed
        </Button>
      </div>
      <div className="flex ml-auto">
        <Button
          variant="secondary"
          onClick={clearCompleted}
          size="sm"
        >
          <Trash2/>
          Clear completed
        </Button>
      </div>
    </div>

  );
};