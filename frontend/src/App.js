import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Router from "./router";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 기본 스타일 초기화 */}
      <Router />
    </ThemeProvider>
  );
}
