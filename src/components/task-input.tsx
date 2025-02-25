import React, { useState } from 'react';
import { useTodoStore } from '@/store/todo-store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {SquarePlus} from "lucide-react";

export const TaskInput = () => {
  const [text, setText] = useState('');
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex space-x-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        className="bg-white"
      />
      <Button
        type="submit"
        variant="secondary"
      >
        <SquarePlus/>
      </Button>
    </form>
  );
};