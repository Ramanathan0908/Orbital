import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        type: 'dark',
        background: {
          default: '#D7EAE9'
        }
    //     primary: {
    //       main: '#f48fb1',
    //       light: 'rgb(246, 165, 192)',
    //       dark: 'rgb(170, 100, 123)',
    //       contrastText: 'rgba(0, 0, 0, 0.87)'
    //     },
    //     secondary: {
    //       main: '#f50057',
    //       light: 'rgb(247, 51, 120)',
    //       dark: 'rgb(171, 0, 60)',
    //       contrastText: '#fff'
    //     },
    //     error: {
    //         main: '#f44336',
    //         light: '#e57373',
    //         dark: '#d32f2f',
    //         contrastText: '#fff'
    //     },
    //     info: {
    //         main: '#2196f3',
    //         light: '#64b5f6',
    //         dark: '#1976d2',
    //         contrastText: '#fff'
    //     },
    //     success: {
    //         main: '#4caf50',
    //         light: '#81c784',
    //         dark: '#388e3c',
    //         contrastText: '#fff'
    //     },
    //     divider: 'rgba(255, 255, 255, 0.12)',
    //     background: {
    //         default: '#303030',
    //         paper: '#424242'
    //     },
    //     text: {
    //         primary: '#fff',
    //         secondary: 'rgba(255, 255, 255, 0.7)',
    //         disabled: 'rgba(255, 255, 255, 0.5)',
    //         hint: 'rgba(255, 255, 255, 0.5)'
    //     }
       },
      spacing: 8,
      shape: {
        borderRadius: 12,
      },
})