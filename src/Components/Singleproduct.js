// import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../Rtk/Slices/Products-slices';  
// import { Container, Row,Col } from 'react-bootstrap';
// import { AddToCart } from '../Rtk/Slices/cart-slice';
// import { useParams } from "react-router-dom";



// export default function Singleproduct() {let { id } = useParams();

// const products=useSelector((state)=>state.products);
// console.log(products);
// const dispatch=useDispatch();

// useEffect(()=>{
// dispatch(fetchProducts());
// },[dispatch]);
//     return (
//   <Container>
//      <Row>
//       {products?.products?.filter((product)=>[product.category==="laptops" || product.category==="smartphones"] && product.id==[id]).map((product)=>(
//       (<Col key={product.id} className='m-3 p-5 col-12'style={{height:'60vh' }}> 
//         <Card.Img variant='top' src={product.images[0]} style={{height:'17rem' ,width:"40%"}}  id="example-collapse-text"/>
//   <Card.Body  style={{height:"20rem"}} >
//          <Card.Title>{product.title}</Card.Title>
//            <Card.Text>{product.description}</Card.Text>
//            <Card.Text>Instock:{product.stock}</Card.Text>
//            <Card.Text>Price:{product.price}$</Card.Text>       
// <Card.Body  style={{height:"5rem" ,marginBottom:"10px"}} >      
// <Row >
//       <Col className='col-4'> <img src={product.images[1]} alt='' style={{height:"10rem" , width:"50%"}}></img></Col>
//       <Col className='col-4'> <img src={product.images[2]} alt=''  style={{height:"10rem" , width:"50%"}}></img></Col>
//       <Col className='col-4' > <img src={product.images[3]} alt=''style={{height:"10rem" , width:"50%",border:"0px"}} ></img></Col>
// </Row>

//            </Card.Body>

//            </Card.Body>

//     <Button variant="primary"  onClick={() => { dispatch(AddToCart(product)) }} >      
  
//   Buy
//  </Button>
           
//       </Col>
     

//        )
//       )

//       )

//       }

//      </Row>
    
//   </Container>
//     );
//   }






import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Rtk/Slices/Products-slices';  
import { Container, Row, Col } from 'react-bootstrap';
import { AddToCart } from '../Rtk/Slices/cart-slice';
import { useParams } from 'react-router-dom';

export default function Singleproduct() {
  let { id } = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products?.products?.find((product) => product.id == id);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
<>    <Container>
      <Row>
         {product && (
       <Col key={product.id} className='m-3 p-5 col-12' style={{ height: '60vh' }}>
            <Card.Img variant='top' src={product.images[selectedImageIndex]} style={{ height: '17rem', width: '40%' }} id='example-collapse-text' />
            <Card.Body style={{ height: '20rem' }}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Instock: {product.stock}</Card.Text>
              <Card.Text>Price: {product.price}$</Card.Text>
              <Button variant='primary' onClick={() => dispatch(AddToCart(product))} className='mb-2'>
              Buy
            </Button>


              <Card.Body style={{ height: '5rem', marginBottom: '10px' }}>
                <Row>
                  {product.images.map((image, index) => (
                    <Col className=' col-6 col-md-4 mb-5 pb-5' key={index}>
                      <img
                        src={image}
                        alt={`Product ${index}`}
                        style={{ height: '10rem', width: '50%', cursor: 'pointer' }}
                        onClick={() => handleImageClick(index)}
                      />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card.Body>

          
          </Col> 
       
        )}
      </Row>  
       
    </Container>

            </>
  );
}
