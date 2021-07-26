import { ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import './App.css'
import Header from './components/Header'
import '@fontsource/roboto'

const theme = createTheme({
  palette: {
    background: {
      default: grey[900]
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
