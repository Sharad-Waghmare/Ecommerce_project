import React, { useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux'
import { getCartsAll, removeFromCart, updateQuantity } from '../../Store/Cart/Action';
import { Container, Card, Col, CardBody, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import "./CartpageComp.css"

const CartpageComp = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const rows = data.carts;
  console.log(rows);

  useEffect(() => {
    dispatch(getCartsAll())
  }, [])


  const increment = (id) => {
    let type = 'increment'
    dispatch(updateQuantity(id, type)).then(() => {
      dispatch(getCartsAll())
    })
  };

  const decrement = (id) => {
    let type = 'decrement'
    dispatch(updateQuantity(id, type)).then(() => {
      dispatch(getCartsAll())
    })
  }

  const deleteHandler = (id) => {
    dispatch(removeFromCart(id)).then(() => {
      dispatch(getCartsAll())
    })
  }

  

  return (
    <>
      <div className="container">
      {
        rows?.result ? (
          <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Product</th>
              <th style={{ width: '10%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '22%' }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: '10%' }}></th>
            </tr>
          </thead>

          <tbody>
            {
              rows.data && rows.data.map((elem) => {
                return (
                  <tr>
                    <td data-th="Product">
                      <div className="row">

                        <div className="col-sm-2 hidden-xs">
                          <img
                            src={`${rows?.path}/${elem.thumbnail}`}

                            alt="..."
                            width={100}
                            className="img-responsive"
                          />
                        </div>
                        <div className="col-sm-10">
                          {/* <h4>Product 1</h4> */}
                          <p className='ms-5'>
                            {elem.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">{elem.price}</td>
                    <td data-th="Quantity">
                      <div className='d-flex align-items-center  justify-content-center'>
                      <button type="button" value="+" onClick={() => increment(elem._id)} >+</button>
                      <h5>{elem.quantity}</h5>
                      <button type="button" value="-" onClick={() => decrement(elem._id)}>-</button>
                      </div>
                    </td>
                    <td data-th="Subtotal" className="text-center">
                      {elem.subtotal}
                    </td>
                    <td className="actions" data-th="">
                      <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(elem._id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to="/" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Continue Shopping
                </Link>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total: {rows.total}</strong>
              </td>
              <td>
                <button className="btn btn-success">
                Checkout 
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
        ) : (
          <div className='text-center'>
            <h1 className='text-danger'>Your Cart is empty</h1>
          </div>
        )
      }
      </div>

    </>
  )
}

export default CartpageComp