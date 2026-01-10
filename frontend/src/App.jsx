import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Dashboard toggleTheme={() => setDark(!dark)} />
    </ThemeProvider>
  );
}
