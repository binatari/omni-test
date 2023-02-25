// import { Roboto } from '@next/font/google';
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#46C35F",
    },
    secondary: {
      main: "#46C35F",
    },
    error: {
      main: red.A400,
    },
    grey: {
      main: "#E5E5E5",
      light:"#616161"
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      fontSize: "40px",
      fontWeight: 900,
      lineHeight: "48px",
      letterSpacing: "0.75px",
      textAlign: "left",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "32px",
      letterSpacing: "0.1px",
      textAlign: "left",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
        color:'white'
        },
      },
    },
  },
});

export default theme;
