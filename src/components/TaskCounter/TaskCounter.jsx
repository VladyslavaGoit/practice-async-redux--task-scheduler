import { useSelector } from 'react-redux';
import { selectTasksCount } from 'redux/selectors';
import { Title } from './TaskCounter.styled';

export const TaskCounter = () => {
  const count = useSelector(selectTasksCount);
  return (
    <div>
      <Title>Task</Title>
      <ul>
        <li>
          <p>Active: {count.active}</p>
        </li>
        <li>
          <p>Completed: {count.completed} </p>
        </li>
      </ul>
    </div>
  );
};
