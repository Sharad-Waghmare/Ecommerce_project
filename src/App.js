import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/HomePage/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductsShop from './Page/ShopPage/AllProductsShop';
import AllSubCategories from './Component/SubCategory/AllSubCategories';
import CartpageComp from './Page/CartPage/CartpageComp';
import SingleProduct from './Page/SingleProduct/SingleProduct';
import NavbarComp from './Component/Header/NavbarComp';

function App() {
  return (
    <>
    <Router>
      <NavbarComp/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/subcategory' element={<AllSubCategories/>}/>
          <Route path='/product' element={<AllProductsShop/>}/>
          <Route path='/cart' element={<CartpageComp/>}/>
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        </Routes>
        </Router>
      
    </>

    
  );
}

export default App;
