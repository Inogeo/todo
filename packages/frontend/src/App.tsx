import Box from '@mui/material/Box';
import { NewTaskModal } from './components/ui/NewTaskModal/NewTaskModal';
import { useSelector } from 'react-redux';
import TaskType from './types/Task';
import { TaskCard } from './components/ui/TaskCard/TaskCard';
import { RootState } from './redux/store';
import { NavBar } from './components/ui/NavBar/NavBar';

function App() {
  const tasks:TaskType[] = useSelector((state : RootState) => state.tasks)

  console.log(tasks)
  const taskItems = tasks.map(task => <TaskCard {...task}/>)

  return (
    <Box>
      <Box>
        <NavBar label='TODO Démo App'></NavBar>
      </Box>
      <Box sx={{ m: 2 }}>
        <NewTaskModal></NewTaskModal>
      </Box>
      <Box sx={{ m: 2 }}>
        {taskItems}
      </Box>
    </Box>
  );
}

export default App
