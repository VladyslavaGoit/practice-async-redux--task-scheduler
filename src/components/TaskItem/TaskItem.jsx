import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { CheckBox, Text, Wrapper } from './TaskItem.styled';

export const TaskItem = ({ task: { id, completed, text } }) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));
  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={completed} onChange={handleToggle} />
      <Text>{text}</Text>
      <button onClick={handleDeleteTask}>Delete</button>
    </Wrapper>
  );
};
