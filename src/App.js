import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/MyNav';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Home from './Pages/Home';
import MyFooter from './Components/MyFooter'; 
import Singleproduct from './Components/Singleproduct';
import Users from './Components/Users';
import Create from './Components/Create';
import Update from './Components/Update';
import Apoutus from './Pages/Apoutus';
import Login from './Components/Login'
import Register from'./Components/Register'
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/react-project/' element={<Home/>}></Route>

        <Route path='/Products' element={<Products/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>       
         <Route path="/Products/:id/:String"element={<Singleproduct/>} />
         <Route path='/Users' element={<Users/>}></Route>       
         <Route path='/Create' element={<Create/>}></Route>        
           <Route path='/Apoutus' element={<Apoutus/>}></Route>       
           <Route path='/Login' element={<Login/>}></Route>       
           <Route path='/Register' element={<Register/>}></Route>       

         <Route path='/Users/edit/:id' element={<Update/>}></Route>       



      </Routes>
      <MyFooter/>

    </div>
  );
}

export default App;