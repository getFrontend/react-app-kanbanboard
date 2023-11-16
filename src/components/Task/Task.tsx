import { TaskProps } from './Task.props';
import { Box, IconButton } from '@chakra-ui/react';

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete
}: TaskProps) {
  // const {ref, isDragging}

  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={task.color}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        icon={<DeleteIcon />}
      >

      </IconButton>
    </Box>
  );
}

export default Task;