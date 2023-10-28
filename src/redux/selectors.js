import { createSelector } from '@reduxjs/toolkit';
import { filterStatus } from './constants';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilterStatus = state => state.filters.status;
export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilterStatus],
  (tasks, filter) => {
    switch (filter) {
      case filterStatus.active:
        return tasks.filter(task => !task.completed);
      case filterStatus.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
export const selectTasksCount = createSelector([selectTasks], tasks => {
  console.log('Calculating task count');
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return count;
});
