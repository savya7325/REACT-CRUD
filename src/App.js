import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import ViewProd from './Pages/viewProduct/ViewProd';
import Login from './Pages/viewProduct/Login';
import AuthProvider, { useAuth } from "./Context/AuthProvider";
import CartPage from './Pages/cartPages';

function App() {

  const { user } = useAuth();

  // console.log(user,'userrrr')

  return (
    <div className="App">
      <BrowserRouter>
          <ToastContainer />
          {
            user ? (
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/view/:id" element={<ViewProd />} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
           
            ) : <Login/>
          }
      </BrowserRouter>
    </div>
  );
}



export default App;

