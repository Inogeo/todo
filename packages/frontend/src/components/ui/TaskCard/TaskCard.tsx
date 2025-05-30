
import { Button, Card, CardContent, Typography } from "@mui/material"
import {PropsWithChildren} from 'react';
import TaskType from "../../../types/Task"
import { useDispatch } from "react-redux";
import { removeTask } from "../../../app/taskSlice";

export function TaskCard({...props}:PropsWithChildren<TaskType>) {

  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(removeTask(props.uuid))
  }

  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.description}
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
      </CardContent>
    </Card>
  )
}
