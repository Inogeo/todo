import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NewTaskModal } from './components/ui/NewTaskModal/NewTaskModal';
import { useSelector } from 'react-redux';
import TaskType from './types/Task';
import { TaskCard } from './components/ui/TaskCard/TaskCard';
import { RootState } from './redux/store';

function App() {
  const tasks:TaskType[] = useSelector((state : RootState) => state.tasks)

  console.log(tasks)
  const taskItems = tasks.map(task => <TaskCard {...task}/>)

  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TODO app
            </Typography>
          </Toolbar>
        </AppBar>
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
