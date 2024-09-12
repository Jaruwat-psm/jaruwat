import Resume from "./Page/Resume";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Resume/>
    </ThemeProvider>
  )
}
export default App;