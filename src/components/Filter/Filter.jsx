import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { filterStatus } from 'redux/constants';
import { getFilterStatus } from 'redux/selectors';
import { ButtonsList, Title } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterStatus);
  const { all, active, completed } = filterStatus;
  const dispatch = useDispatch();
  const handleChangeFilter = value => dispatch(setStatusFilter(value));
  return (
    <div>
      <Title>Filter by status</Title>
      <ButtonsList>
        <li>
          <Button
            onClick={() => handleChangeFilter(all)}
            selected={filter === all}
          >
            All
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleChangeFilter(active)}
            selected={filter === active}
          >
            Active
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleChangeFilter(completed)}
            selected={filter === completed}
          >
            Completed
          </Button>
        </li>
      </ButtonsList>
    </div>
  );
};
