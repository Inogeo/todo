import { ComponentProps } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

type NavBarProps =
  ComponentProps<"input"> & {
    label: string;
  };

export function NavBar({...props}:NavBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.label}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
