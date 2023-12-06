import React, { useEffect } from 'react';
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryAll } from '../../Store/Category/Action';
import { Link } from 'react-router-dom';

const AllCategories = () => {
    const dispatch = useDispatch()
    const cate = useSelector((state) => state.category.categories)
    console.log(cate);

    useEffect(() =>{
        dispatch(getCategoryAll())
    },[])

  return (
    <>
    <Container className="my-3 py-3">
      <h3 className="text-center mb-4">Browse Categories</h3> 
      <Row>
        {cate.data &&
          cate.data.map((elem, index) => {
            return (
              <Col xs={12} sm={6} md={3} className="mb-2 p-2" key={index}>
                <Link to={`/subcategory`} >
                <Card className="custom-card">
                    <CardBody>       
                    <Card.Text className="text-capitalize">{elem.name}</Card.Text>
                    <Card.Img src={`${cate.path}/${elem?.image}`} />
                    </CardBody>
                </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </Container>
    </>
  )
}

export default AllCategories