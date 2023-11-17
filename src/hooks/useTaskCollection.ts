import { useLocalStorage } from 'usehooks-ts';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';
import { v4 as uuidv4 } from 'uuid';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>(
    'tasks', {
    'Hot tasks': [
      {
        id: uuidv4(),
        column: ColumnType.HOT_TASKS,
        title: 'Task 1',
        color: 'orange.300'
      }
    ],
    'To do': [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 2',
        color: 'blue.300'
      }
    ],
    'In work': [
      {
        id: uuidv4(),
        column: ColumnType.IN_WORK,
        title: 'Task 3',
        color: 'yellow.300'
      }
    ],
    'Done': [
      {
        id: uuidv4(),
        column: ColumnType.DONE,
        title: 'Task 4',
        color: 'green.300'
      }
    ]
  }
  );
}

export default useTaskCollection;