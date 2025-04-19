
import { Card, CardContent, Typography } from "@mui/material"
import {PropsWithChildren} from 'react';
import TaskType from "../../../types/Task"


export function TaskCard({...props}:PropsWithChildren<TaskType>) {

  return (
    <Card sx={{ minWidth: 275 , m: 2}}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
