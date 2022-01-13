import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "../src/routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
