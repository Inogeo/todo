import {Box} from '@mui/material';
import { NewTaskModal } from './components/ui/NewTaskModal/NewTaskModal';
import { useSelector } from 'react-redux';
import TaskType from './types/Task';
import { TaskCard } from './components/ui/TaskCard/TaskCard';
import { RootState } from './app/store';
import { NavBar } from './components/ui/NavBar/NavBar';

function App() {
  const tasks:TaskType[] = useSelector((state : RootState) => state.tasks)

  const taskItems = tasks.map(task => <TaskCard key={task.uuid} {...task}/>)

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ m: 2 }}> 
        <NavBar label='To-do list demo app'></NavBar>
      </Box>
      <Box sx={{ m: 2 }}>
        <Box sx={{ m: 2 }}>
          <NewTaskModal></NewTaskModal>
        </Box>
        <Box sx={{ m: 2 }}>
          {taskItems}
        </Box>
      </Box>
    </Box>
  );
}

export default App
