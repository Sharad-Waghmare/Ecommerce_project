import React from 'react'
import NavbarComp from '../../Component/Header/NavbarComp'
import HeaderSlider from '../../Component/Slider/HeaderSlider'
import FooterComp from '../../Component/Footer/FooterComp'
import AllCategories from '../../Component/Category/AllCategories'
import AllSubCategories from '../../Component/SubCategory/AllSubCategories'
import AllProductsShop from '../ShopPage/AllProductsShop'
import SingleProduct from '../SingleProduct/SingleProduct'

const Home = () => {
  return (
    <>
    <HeaderSlider/>
    {/* <AllCategories/> */}
    <AllProductsShop/>
    <FooterComp/>
    </>
  )
}

export default Home