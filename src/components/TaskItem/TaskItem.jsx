import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
import { CheckBox, Text, Wrapper } from './TaskItem.styled';

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));
  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <button onClick={handleDeleteTask}>Delete</button>
    </Wrapper>
  );
};
