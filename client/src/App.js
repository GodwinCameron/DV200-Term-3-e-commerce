import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import IndividualProduct from './components/IndividualProduct';
import { RouterSetup } from './components/RouterSetup';
import Store from './components/Store';
import Secret from './components/Secret';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/IndividualProduct' element={<IndividualProduct/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/Secret' element={<Secret/>}/>
    </Routes>
    <RouterSetup/>
    </>
  );
}

export default App;
