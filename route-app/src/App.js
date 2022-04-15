import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={ 
          <PrivateRoute> 
            <Home /> 
          </PrivateRoute>}/> 
        <Route path='/profile' element={
          <PrivateRoute> 
            <Profile /> 
          </PrivateRoute>}/>
        <Route path='/product' element={
          <PrivateRoute> 
            <Product /> 
          </PrivateRoute>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
