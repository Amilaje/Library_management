import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30aeaa",  // primary 색상 재정의
    },
    secondary: {
      main: "#c8e7e6",  // secondary 색상 재정의
    },
    text: {
        primary: "#171717", 
        secondary: "#9ca3af",
    },
    action: {
        pressed: "#217f7a",
    },
    divider: "#e5e7eb",
    error: {
      main: "#ef4444",
    },
    background: {
      default: "#f2f2f2",
    },
  },
  typography: {
    fontFamily: "'Pretendard', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,

    button: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 500,
    },
    h1: {
      fontSize: "1.75rem", // 28px
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    // 커스텀 추가
    displayTitle: {
      fontSize: "2rem", // 32px
      fontWeight: 700,
    },
    inputLabel: {
      fontSize: "1.125rem", // 18px
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,  // 기본 둥글기 조정
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 999,
        },
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
