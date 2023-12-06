import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAll } from '../../Store/Product/Action';
import { Container, Card, Col, CardBody, Row } from 'react-bootstrap'
import NavbarComp from '../../Component/Header/NavbarComp';
import { addtoCart, getCartsAll } from '../../Store/Cart/Action';
import { Link } from 'react-router-dom';
import "./../ShopPage/AllProducts.css"

function AllProductsShop () {

    const dispatch = useDispatch();
    const prod = useSelector((state) => state.product.products);
    console.log(prod.data);


    useEffect(() =>{
        dispatch(getProductsAll())
    },[])


    const clickHandler = (id) =>{
      dispatch(addtoCart(id)).then(()=>{
        dispatch(getCartsAll())
      })
    }

    return (
      <>

<div class="container bg-white">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
        <div class="container-fluid p-0"> 
        <Link class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</Link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
            <div class="collapse navbar-collapse" id="myNav">
                <div class="navbar-nav ms-auto">
                   <Link class="nav-link active" aria-current="page" to="#">All</Link> 
                   <Link class="nav-link" to="#">Women's</Link>
                    <Link class="nav-link" to="#">Men's</Link> 
                    <Link class="nav-link" to="#">Kid's</Link> 
                    <Link class="nav-link" to="#">Accessories</Link> 
                    <Link class="nav-link" to="#">Cosmetics</Link> </div>
            </div>
        </div>
    </nav>
    <div class="row">
        {
            prod.data && prod.data.map((elem, ind) =>{
                return(
                    <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div class="product">
                         <img src={`http://localhost:8001/uploads/product/${elem.thumbnail}`} alt=""/>
                        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                            <li class="icon mx-3"><span class="far fa-heart"></span></li>
                           <Link to={`/singleproduct/${elem._id}`}> <li class="icon"><span class="fas fa-shopping-bag"></span></li></Link>
                        </ul>
                    </div>
                    <div class="tag bg-red">sale</div>
                    <div class="title pt-4 pb-1">{elem.name}</div>
                    <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                    <div class="price">{elem.price}</div>
                </div>
                )
            })
        }
    </div>

</div>
    </>
  )
}

export default AllProductsShop