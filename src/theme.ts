import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0F766E", // Elegant fjord-grønn
      light: "#14B8A6",
      dark: "#115E59",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B", // Balansert amber
      light: "#FBD38D",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAF9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: -2,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 900,
      letterSpacing: -1.5,
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 900,
      letterSpacing: -0.8,
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 900,
      letterSpacing: -0.6,
      lineHeight: 1.25,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: 0.3,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(15, 23, 42, 0.06)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          fontSize: 15,
          fontWeight: 700,
        },
        sizeLarge: {
          padding: "12px 32px",
          fontSize: 16,
        },
        contained: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});
