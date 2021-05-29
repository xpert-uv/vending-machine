
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VendingMachine from './component/VendingMachine'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Route path='/'>
          <VendingMachine />
        </Route>
      </BrowserRouter>

    </div >
  );
}

export default App;
