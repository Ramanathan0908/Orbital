import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        // background: {
        //   default: '#D7EAE9'
        // }
        primary: {
          main: '#219EBC'
        },
        background: {
          default: '#1A1D1F',
          // paper: '#111315'
        }
       },
      spacing: 8,
      shape: {
        borderRadius: 12,
      },
})