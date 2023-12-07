import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartsAll, removeFromCart, updateQuantity } from '../../Store/Cart/Action';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import "./CartpageComp.css"

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
    notify();
  }

  const notify = () => toast.success('Your Cart is empty!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <>
      {
        rows?.result ? (
          <div className="cart-container">
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="delete">Delete</h3>
            </div>
            <div className="cart-items">
              {rows.data && rows.data.map((elem) => (
                <div className="cart-item" key={elem.id}>
                  <div className="cart-product">
                    <img src={`${rows?.path}/${elem.thumbnail}`} alt={elem.name} />
                    <div>
                      <h3>{elem.name}</h3>
                      <p>{elem.desc}</p>
                    </div>
                  </div>
                  <div className="cart-product-price">${elem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => decrement(elem._id)}>
                      -
                    </button>
                    <div className="count">{elem.quantity}</div>
                    <button onClick={() => increment(elem._id)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(elem._id)}>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <Link to="/">
                <button className='clear-btn'>Continue Shopping</button>
              </Link>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Total</span>
                  <span className="amount">${rows.total}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-4 text-center'>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <ToastContainer />
          </div>
        )}


    </>
  )
}

export default CartpageComp