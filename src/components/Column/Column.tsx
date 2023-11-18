import { ColumnType } from '../../utils/enums';
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Task from '../Task/Task';
import useColumnTasks from '../../hooks/useColumnTasks';
import useColumnDrop from '../../hooks/useColumnDrop';

export const ColumnColorScheme: Record<ColumnType, string> = {
  'Hot tasks': 'orange',
  'To do': 'blue',
  'In work': 'yellow',
  Done: 'green'
};

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  const iconColor100 = `${ColumnColorScheme[column]}.100`;
  const iconColor200 = `${ColumnColorScheme[column]}.200`;
  const iconColor400 = `${ColumnColorScheme[column]}.400`;

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        gap={2}
      >

        <Heading
          w="full"
          letterSpacing="wide"
          textAlign="center"
        >
          <Badge
            w="full"
            px={6}
            py={3.5}
            rounded="xl"
            colorScheme={ColumnColorScheme[column]}
            fontSize="lg"
          >
            {column}
          </Badge>
        </Heading>
        <IconButton
          size="lg"
          w="30%"
          color={useColorModeValue('gray.800', 'gray.600')}
          bgColor={useColorModeValue(iconColor200, iconColor400)}
          // bgColor={useColorModeValue('gray.100', 'gray.700')}
          _hover={{ bgColor: useColorModeValue(iconColor100, iconColor400) }}
          rounded="xl"
          variant="solid"
          fontSize="lg"
          onClick={addEmptyTask}
          colorScheme={ColumnColorScheme[column]}
          aria-label="add-task"
          icon={<AddIcon />}
        />
      </Flex>
      <Stack
        ref={dropRef}
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 200, md: 500 }}
        p={3}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.85 : 1}
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Column;