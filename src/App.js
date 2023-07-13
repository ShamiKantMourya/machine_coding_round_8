import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import EventDetails from './Components/EventDetails';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='/' element = { <HomePage />} />
          <Route path='/:eventId' element = {<EventDetails />} />
        </Routes>
    </div>
  );
}

export default App;
