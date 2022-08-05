import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import IndividualProduct from './components/IndividualProduct';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/IndividualProduct' element={<IndividualProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
