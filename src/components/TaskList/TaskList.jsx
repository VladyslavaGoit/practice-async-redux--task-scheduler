import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { filterStatus } from 'redux/constants';
import { getFilterStatus, getTasks } from 'redux/selectors';
import { Item } from './TaskList.styled';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case filterStatus.active:
      return tasks.filter(task => !task.completed);
    case filterStatus.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilterStatus);
  const visibleTasks = getVisibleTasks(tasks, filter);
  return (
    <ul>
      {visibleTasks.map(task => (
        <Item key={task.id}>
          <TaskItem task={task} />
        </Item>
      ))}
    </ul>
  );
};
