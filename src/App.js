import './App.css';
import HomePage from './components/HomePage';
import { data } from './components/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeetupDetails from './components/MeetupDetails';
import NavbarPage from './components/NavBar';

function App() {
  console.log(data);
  return (
    <div>
      <NavbarPage />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/meetup-details/:id" element={<MeetupDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
