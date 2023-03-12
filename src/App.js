import './App.css';
import Home from './routes/Home'
import Services from './routes/Services';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
