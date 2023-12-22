import Carousel from 'react-bootstrap/Carousel';
import  './style/MySlider.css';

function Slider() {
  return (
    <Carousel className='Carsol '>
    <Carousel.Item  >
      <img
       
        src="https://i.dummyjson.com/data/products/5/2.jpg"
        alt="First slide"
      />
   
    </Carousel.Item>
    <Carousel.Item>
      <img
  src="https://i.dummyjson.com/data/products/1/3.jpg"
          alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://i.dummyjson.com/data/products/2/3.jpg"
        alt="Third slide"
      />

   
    </Carousel.Item>
  </Carousel>
);
}

export default Slider;