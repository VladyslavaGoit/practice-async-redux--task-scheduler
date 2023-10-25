import { Filter } from 'components/Filter/Filter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Wrapper>
      <TaskCounter />
      <Filter />
    </Wrapper>
  );
};
