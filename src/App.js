import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import ViewProd from './Pages/viewProduct/ViewProd';
import Login from './Pages/viewProduct/Login';
import AuthProvider, { useAuth } from "./Context/AuthProvider";

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
          </Routes>
           
            ) : <Login/>
          }
      </BrowserRouter>
    </div>
  );
}



export default App;

