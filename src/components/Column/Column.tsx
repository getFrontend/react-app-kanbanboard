import { ColumnType } from '../../utils/enums';
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Task from '../Task/Task';

const ColumnColorSheme: Record<ColumnType, string> = {
  'Hot tasks': 'orange',
  'To do': 'gray',
  'In work': 'blue',
  Done: 'green'
};

function Column({ column }: { column: ColumnType }) {
  const ColumnTasks = task.map((task, index) => {
    <Task
      key={task.id}
      task={task}
      index={index}
      // onDropHover={ }
      // onUpdate={ }
      // onDelete={ }
    />;
  });

  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorSheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
        size="xs"
        w="full"
        color={useColorModeValue('gray.500', 'gray.400')}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
        py={2}
        variant="solid"
        // onClick={addEmptyTask}s
        colorScheme="black"
        aria-label="add-task"
        icon={<AddIcon />}
      />
      <Stack
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Column;