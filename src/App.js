import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import EventDetail from './Pages/EventDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='/' element = { <HomePage />} />
          <Route path='/:eventId' element = {<EventDetail />} />
        </Routes>
    </div>
  );
}

export default App;
