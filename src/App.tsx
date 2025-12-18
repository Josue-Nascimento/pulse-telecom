import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Residencial from './pages/Residencial';
import Corporativo from './pages/Corporativo';
import Cobertura from './pages/Cobertura';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Scroll from './pages/ScrollToTop';
const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
    <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/residencial" element={<Residencial />} />
        <Route path="/corporativo" element={<Corporativo />} />
        <Route path="/cobertura" element={<Cobertura />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
