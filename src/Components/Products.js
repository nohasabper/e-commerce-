
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Rtk/Slices/Products-slices';
import { AddToCart } from '../Rtk/Slices/cart-slice';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products?.products
    ?.filter(
      (product) =>
        (selectedCategory === 'all' ||
          (selectedCategory === 'devices' &&
            (product.category === 'laptops' || product.category === 'smartphones')) ||
          (selectedCategory === 'groceries' && product.category === 'groceries') ||
          (selectedCategory === 'skincare' && product.category === 'skincare')) &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((product) => (
      <Col key={product.id} xs={12} md={6} xl={4}>
        <Card style={{ width: '100%', height: '40rem' }} className='mb-5 mt-3'>
          <Link to={`/Products/${product.id}/${product.title}`}>
            <Card.Img variant="top" src={product.images[0]} style={{ height: '17rem' }} />
          </Link>

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Instock: {product.stock}</Card.Text>
            <Card.Text>Price: {product.price}$</Card.Text>

            <Button variant="primary" onClick={() => dispatch(AddToCart(product))}>
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container className='mt-5 pt-5'>
      <Row>
      
      <Col md={3}
      >
      <Form.Group controlId="categoryRadio" className='mt-5' >
        <h3 className='mb-3'> category </h3>
        <Form.Check
          type="radio"
          label="All"
          value="all"
          checked={selectedCategory === 'all'}
          onChange={() => setSelectedCategory('all')}
        />
        <Form.Check
          type="radio"
          label="Devices (Laptops/Smartphones)"
          value="devices"
          checked={selectedCategory === 'devices'}
          onChange={() => setSelectedCategory('devices')}
        />
        <Form.Check
          type="radio"
          label="Groceries"
          value="groceries"
          checked={selectedCategory === 'groceries'}
          onChange={() => setSelectedCategory('groceries')}
        />
        <Form.Check
          type="radio"
          label="Skincare"
          value="skincare"
          checked={selectedCategory === 'skincare'}
          onChange={() => setSelectedCategory('skincare')}
        />
      </Form.Group>

      </Col><Col md={9}>
      <Form.Group controlId="searchBar" >
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group><Row>{filteredProducts}</Row>
      </Col>  </Row>
    </Container>
  );
}

// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../Rtk/Slices/Products-slices';
// import { AddToCart } from '../Rtk/Slices/cart-slice';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function Products() {
//   const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const filteredProducts = products?.products
//     ?.filter(
//       (product) =>
//         (product.category === 'laptops' || product.category === 'smartphones') &&
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .map((product) => (
//       <Col key={product.id} xs={12} md={6} xl={4}>
//         <Card style={{ width: '100%', height: '35rem'}} className='mb-3 mt-3'>
//           <Link to={`/Products/${product.id}/${product.title}`}>
//             <Card.Img variant="top" src={product.images[0]} style={{ height: '17rem' }} />
//           </Link>

//           <Card.Body>
//             <Card.Title>{product.title}</Card.Title>
//             <Card.Text>{product.description}</Card.Text>
//             <Card.Text>Instock: {product.stock}</Card.Text>
//             <Card.Text>Price: {product.price}$</Card.Text>

//             <Button variant="primary" onClick={() => dispatch(AddToCart(product))}>
//               Buy
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     ));

//   return (
//     <Container className='mt-5 pt-5'>
//       <Form.Group controlId="searchBar">
//         <Form.Control
//           type="text"
//           placeholder="Search by title"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Form.Group>

//       <Row>{filteredProducts}</Row>
//     </Container>
//   );
// }


// import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../Rtk/Slices/Products-slices';  
// import { Container, Row,Col } from 'react-bootstrap';
// import { AddToCart } from '../Rtk/Slices/cart-slice';
// import { Link } from 'react-router-dom';

// export default function Products() {
// const products=useSelector((state)=>state.products);
// console.log(products);
// const dispatch=useDispatch();

// useEffect(()=>{
// dispatch(fetchProducts());
// },[dispatch]);

//     return (
//   <Container>
//      <Row>
//       {products?.products?.filter((product)=>product.category==="laptops" || product.category==="smartphones").map((product)=>(
//       (<Col key={product.id}>
//         <Card style={{width:'18rem',height:"35rem ",margin:"5rem"}}>
//         <Link to={"/Products/" +product.id+`/${product.title}`}>    <Card.Img variant='top' src={product.images[0]} style={{height:'17rem'}}/></Link> 
        

//   <Card.Body >
//            <Card.Title>{product.title}</Card.Title>
//            <Card.Text>{product.description}</Card.Text>
//            <Card.Text>Instock:{product.stock}</Card.Text>
//            <Card.Text>Price:{product.price}$</Card.Text>

//          <Button variant="primary"  onClick={() => { dispatch(AddToCart(product)) }} >      
  
//            Buy
//           </Button>
//          </Card.Body>

//         </Card>
//         </Col>

//        )
//       )

//       )

//       }

//      </Row>
//   </Container>
//     );
//   }

 // <Card
  //   //   className={`col  bg-${
  //   //   quantity === 1 ? "warning bg-opacity-75 text-light" : "light text-dark"
  //   // }    justify-content-center`}
       
  //     >
  //       <Card.Img
  //         variant="top"
  //         src=""
  //         style={{ height: "15rem", objectFit: "cover" }}
  //         // className={`rounded ${!inStock && "opacity-50"}`}
  //       />
  //               <Card.Body>
  //               <Card.Text>desc</Card.Text>

  //       {/* <Card.Body className={`text-center ${!inStock && 'opacity-50'}`}> */}
  //         {/* <Card.Title>{title}</Card.Title>
  //         <Card.Text>{desc}</Card.Text>
  //         <Card.Text>Stock : {inStock ? quantity : "Empty 🤦‍♂️"}</Card.Text>
  //         <Button variant={`${inStock ? "success" : "danger disabled"}`}           onClick={clickHandler}
  // >
  //           {inStock ? `Buy ${price}$` : "Not Available"}
  //         </Button> */}
  //       </Card.Body>
  //     </Card>