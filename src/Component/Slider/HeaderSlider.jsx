import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
function HeaderSlider() {
  return (
    <>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // style={{ height: "100vh", objectFit: "cover" }}
            src="../Image/img1.jpg"
            alt=""
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure 100% Cotton Men's Cloths </h5>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // style={{ height: "100vh", objectFit: "cover" }}
            src="../Image/img2.jpg"
            alt=""
          />
          <Carousel.Caption className="bg-white">
            <h5>40% Discount Women's Cloths</h5>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // style={{ height: "100vh", objectFit: "cover" }}
            src="../Image/img3.jpg"
            alt=""
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeaderSlider;