import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, TextFieldProps } from "@mui/material";
import Modal from '@mui/material/Modal';
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../../../redux/taskSlice";
import TaskType from "../../../types/Task";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function NewTaskModal() {

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const taskDescription = useRef<TextFieldProps>(null);
  const taskTitle = useRef<TextFieldProps>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSave(){
    if(taskDescription.current != null && taskTitle.current != null){
      const newTask:TaskType = {
        title: String(taskTitle.current.value),
        description: String(taskDescription.current.value),
        done: false,
      }
      dispatch(addTask(newTask))
      setOpen(false)
    }
    else {
      alert("error")
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" >Add a new task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
              style={{ margin: "5px" }}
              fullWidth
              inputRef={taskTitle}
              id="title"
              label="Title"
            />
          <TextField
            fullWidth
            style={{ margin: "5px" }}
            inputRef={taskDescription}
            id="description"
            label="Description"
            multiline
            maxRows={4}
          />
          <Box sx={{m:1}}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}