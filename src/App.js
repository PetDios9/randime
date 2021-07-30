import { ThemeProvider, CssBaseline, createTheme, } from '@material-ui/core';
import japaneseShop from './japaneseShop.jpg'
import './App.css'
import Header from './components/Header'
import '@fontsource/roboto'
import Homepage from './pages/Homepage';

const theme = createTheme({
  palette: {
    background: {
      default: `#ffffff`,
    },
    text: {
      primary: '#000000'
    },
  }
})

const rootStyles = {
  background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(0,0,0,.5) 93%), url('${japaneseShop}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
  overflow: 'auto',
  color: 'white',
  //overflowX hidden to fix overflow caused from material ui using negative margins,
  //per material-ui documentation
  overflowX: 'hidden'
}

function App() {
  return (
    <div className="App" style={rootStyles} >
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Homepage />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
