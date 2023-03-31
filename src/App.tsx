import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ProfileCardComponent from "./Components/ProfileCardComponent";
import BgPatternTop from "./assets/bg-pattern-top.svg";
import BgPatternBottom from "./assets/bg-pattern-bottom.svg";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Kumbh Sans",
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <img className="bg-pattern-top" src={BgPatternTop} />
        <img className="bg-pattern-bottom" src={BgPatternBottom} />
        <ProfileCardComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
