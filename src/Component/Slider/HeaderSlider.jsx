import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
function HeaderSlider() {
  return (
    <>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Image/caro.webp"
            alt=""
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Image/caro1.webp"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Image/caro2.webp"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeaderSlider;