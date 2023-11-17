import { useCallback } from 'react';
import { ColumnType } from '../utils/enums';
import useTaskCollection from './useTaskCollection';
import { v4 as uuidv4 } from 'uuid';
import pickChakraRandomColor from '../helpers/pickChakraRandomColor';

const MAX_TASK_PER_COLUMN = 12;

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  // const columnTasks = tasks[column];

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor('.300'),
        column
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks]
      };
    });
  }, [column, setTasks]);

  return { tasks };
}

export default useColumnTasks;