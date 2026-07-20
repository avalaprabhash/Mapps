import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, FormsModule],
})
export class App {


  todos = signal<TodoItem[]>([
    { id: 1, title: 'Plan the day', completed: false },
    { id: 2, title: 'Review the pull request', completed: true },
  ]);

newTodo = '';

  remainingCount = computed(() =>
    this.todos().filter((todo) => !todo.completed).length,
  );

  completedCount = computed(() =>
    this.todos().filter((todo) => todo.completed).length,
  );

 addTodo(): void {
    const title = this.newTodo.trim();

    if (!title) {
      return;
    }

    this.todos.update((items) => [
      ...items,
      { id: Date.now(), title, completed: false },
    ]);

    this.newTodo = '';
  }

  toggleTodo(id: number) {
    this.todos.update((items) =>
      items.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  removeTodo(id: number) {
    this.todos.update((items) => items.filter((todo) => todo.id !== id));
  }

  clearCompleted() {
    this.todos.update((items) => items.filter((todo) => !todo.completed));
  }

  trackByTodo(index: number, todo: TodoItem): number {
    return todo.id;
  }
}
