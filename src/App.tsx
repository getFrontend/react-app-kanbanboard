// import { useState } from 'react';
import { Heading, Container, SimpleGrid } from '@chakra-ui/react';
import Column from './components/Column/Column';
import { ColumnType } from './utils/enums';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DarkModeIconButton from './components/DarkModeIconButton/DarkModeIconButton';

function App() {

  return (
    <main>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Just one more usefull Kanban Board
      </Heading >
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container
          maxWidth="container.xl"
          px={4}
          py={10}
        >
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.HOT_TASKS} />
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_WORK} />
            <Column column={ColumnType.DONE} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;