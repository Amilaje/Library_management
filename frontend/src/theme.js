import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#38b8b2",
      light: "#7ed8d4",
      dark: "#206a66",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ed212b",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#505050",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f7f7",
    },
    divider: "#c7e0df",
  },
  typography: {
    fontFamily: "'Pretendard', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,

    h1: {
      fontSize: "1.75rem", // 28px
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.375rem", // 22px
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.125rem", // 18px
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12, // 기본 둥글기 조정
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          padding: "8px 20px",
          boxShadow: "none",
          transition: "background-color 0.2s ease, color 0.2s ease",
        },
        contained: {
          "&:hover": {
            backgroundColor: "#57ccc6",
          },
          "&:active": {
            backgroundColor: "#2c918c",
          },
        },
        outlined: {
          borderWidth: "2px",
          backgroundColor: "transparent",
        },
        text: {
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        borderRadius: 999,
        backgroundColor: "transparent",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 600,
          fontSize: "0.875rem",
          borderRadius: 8,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "none",
          transition: "all 0.2s ease-in-out",

          "&.Mui-selected": {
            backgroundColor: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.action.pressed}`,
            color: theme.palette.action.pressed,
            boxShadow: "0px 1px 3px rgba(33, 127, 122, 0.12)",
          },
        }),
      },
    },
  },
});

export default theme;
