import theme from "./theme";
import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 기본 스타일 초기화 */}
      <Router />
    </ThemeProvider>
  );
}
