import { ComponentProps } from "react";
import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { IntegrationInstructions } from "@mui/icons-material"

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
        <Link color="inherit" href="/api/v1/docs" rel="noopener" target="_blank">
          <Button color="secondary" variant="contained" startIcon={<IntegrationInstructions/>}>API Swagger</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
