import { Route, Routes } from 'react-router-dom';
import Header from './components/navbar';
import HomePage from './components/home';
import Quote from './components/quote';
import CalcUserInterface from './components/calculator';

const App = () => (
  <div>
    <Header />
    <div className="home-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalcUserInterface />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </div>
);

export default App;
