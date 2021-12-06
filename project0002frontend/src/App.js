
import GlobalStyles from "components/styles/AppStyle";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";


function App() {
  const {currentTheme} = useSelector(state => state.app)
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
