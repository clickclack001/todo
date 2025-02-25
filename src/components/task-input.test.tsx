import { render, screen, fireEvent, act } from '@testing-library/react';
import { TaskInput } from '@/components/task-input';

describe('TaskInput', () => {
  it('добавляет задачу при нажатии на кнопку', async () => {
    render(<TaskInput />);
    const input = screen.getByPlaceholderText('Add new task...');
    const button = screen.getByRole('button', { name: /add-new-task/i });

    act(() => {
      fireEvent.change(input, { target: { value: 'Новая задача' } });
    });

    act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveProperty('value', '');
  });

  it('не добавляет задачу, если поле ввода пустое', async () => {
    render(<TaskInput />);

    const input = screen.getByPlaceholderText('Add new task...');
    const button = screen.getByRole('button', { name: /add-new-task/i });

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
    });

    act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveProperty('value', '');
  });
});
