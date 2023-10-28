import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { selectVisibleTasks } from 'redux/selectors';
import { Item } from './TaskList.styled';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);
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
