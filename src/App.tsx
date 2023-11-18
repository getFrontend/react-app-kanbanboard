import { Heading, Container, SimpleGrid, Flex } from '@chakra-ui/react';
import Column from './components/Column/Column';
import { ColumnType } from './utils/enums';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DarkModeIconButton from './components/DarkModeIconButton/DarkModeIconButton';

function App() {

  return (
    <main>
      <Container
        maxWidth="container.xl"
        py={2}
      >
        <Flex
          align="center"
        >
          <Heading
            w="full"
            fontSize={{ base: 'xl', sm: '4xl', md: '5xl' }}
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear(to-r, #E0F4FF, #435585)"
            bgClip="text"
          >
            One more usefull Kanban Board
          </Heading >
          <DarkModeIconButton
            fontSize={{ base: 'lg', md: '2xl' }}
            rounded="3xl"
          />
        </Flex>

      </Container>
      <DndProvider backend={HTML5Backend}>
        <Container
          maxWidth="container.xl"
          px={2}
          py={8}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
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