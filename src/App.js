import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './pages/Signup';
import { CartProvider } from './components/Cart';

function App() {
  return (
    <CartProvider>

    <Router>
      <div >
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
