import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './screens/Main';
import StockData from './screens/StockData';

function App() {
  return (
    <Router>
    <div>
        <Routes>
            <Route exact path="/test" element= {<Main/>} />
            <Route exact path="/" element= {<StockData/>} />
        </Routes>
    </div>
</Router>
  );
}

export default App;
