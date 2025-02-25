import { useState } from 'react';
import { useTodoStore } from '@/store/todo-store';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import {Pencil, Save, Trash2} from "lucide-react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
export const TaskList = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const filter = useTodoStore((state) => state.filter);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const editTask = useTodoStore((state) => state.editTask);
  const deleteTask = useTodoStore((state) => state.deleteTask)

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setEditedText(task.text);
  };

  const handleDelete = (id: number) => {
    deleteTask(id);
  }

  const saveEdit = (id: number) => {
    editTask(id, editedText);
    setEditingId(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <ul>
      <AnimatePresence>
        {filteredTasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-2"
          >
            {editingId === task.id ? (
              <div className="flex items-center space-x-2 border-2 rounded-md p-2">
                <Input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="bg-white"
                />
                <Button size="sm" variant="secondary" onClick={() => saveEdit(task.id)}>
                  <Save/>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 border-2 rounded-md p-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>
                  {task.text}
                </span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(task)}>
                    <Pencil/>
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(task.id)}>
                    <Trash2/>
                  </Button>
                </div>
              </div>
            )}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};