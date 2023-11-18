import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    'Hot tasks': [
      {
        id: uuidv4(),
        column: ColumnType.HOT_TASKS,
        title: 'Pay attention to Frontend tasks on a daily basis',
        color: 'orange.300'
      }
    ],
    'To do': [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Start learning the Next.js framework',
        color: 'blue.300'
      }
    ],
    'In work': [
      {
        id: uuidv4(),
        column: ColumnType.IN_WORK,
        title: 'Learn React',
        color: 'yellow.300'
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_WORK,
        title: 'Read one chapter of the book every day',
        color: 'yellow.200'
      }
    ],
    'Done': [
      {
        id: uuidv4(),
        column: ColumnType.DONE,
        title: 'Learned basic JavaScript.',
        color: 'green.300'
      }
    ]
  }
  );
}

export default useTaskCollection;