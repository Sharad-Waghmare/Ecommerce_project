import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubcatgoryAll } from '../../Store/SubCategory/Action'
import { Container, Card, Col, CardBody, Row } from 'react-bootstrap'

const AllSubCategories = () => {
    const dispatch = useDispatch()
    const subcat = useSelector((state) => state.subcategory.subcategories)
    console.log(subcat.data);

    useEffect(()=>{
        dispatch(getSubcatgoryAll())
    }, [])
  return (

    <>

    <Container>
    <h3 className="text-center mb-4">Subcategory</h3> 
    <Row>
      {
        subcat.data && subcat.data.map((elem, ind) =>{
          return(
            <Col xs={12} sm={6} md={3} className="mb-2 p-2" key={ind}>
                    <Card>
                    <CardBody>       
                    <Card.Text className="text-capitalize">{elem.name}</Card.Text>
                    <Card.Img src={`${subcat.path}/${elem?.image}`} />
                    </CardBody>
                </Card>
            </Col>
          )
        })
      }
    </Row>
    </Container>
    </>
  )
}

export default AllSubCategories