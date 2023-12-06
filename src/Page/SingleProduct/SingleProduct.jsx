import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link from React Router
import "./SingleProduct.css"
import { useDispatch } from 'react-redux';
import { getSingleProduct } from '../../Store/Product/Action';
import { useSelector } from 'react-redux';
import { addtoCart, getCartsAll } from '../../Store/Cart/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {

  const { id } = useParams();
  const dispatach = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatach(getSingleProduct(id))
  }, [id])


  const data = useSelector((state) => state?.product.product)
  console.log(data.data);

  const addToCarts = (id) => {
    dispatach(addtoCart(id)).then(() => {
      dispatach(getCartsAll())
    })
    notify()
  }

  const notify = () => toast(' Cart Item successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={`http://localhost:8001/uploads/product/${data.data?.thumbnail}`}
                  alt="Card image cap"
                  id="product-detail"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{data.data?.name}</h1>
                  <p className="h3 py-2">$25.00</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Easy Wear</strong></p>
                    </li>
                  </ul>
                  <h6>Description:</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                  </p>
                  <form action="" method="GET">
                    <input type="hidden" name="product-title" value="Activewear" />
                    <div className="row pb-3">
                      <div className="col d-grid">
                        {/* <Link to={'/cart'}>  */}
                        <button type="button" className="btn btn-success btn-lg" name="submit" value="addtocart" onClick={() => addToCarts(data.data?._id)}>
                          {console.log(data.data?._id)}
                          Add To Cart</button>
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                          
                        />
                        {/* Same as */}
                        <ToastContainer />
                        {/* </Link> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
