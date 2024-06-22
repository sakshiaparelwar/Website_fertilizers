// import { useEffect, useState } from "react";
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Home(){
  return (
    <>
    <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2023/01/frontiers-environmental-science-recycled-urine-promising-fertilizer.png?ssl=1"
                        alt="First slide" height={700}
                    />
                    <Carousel.Caption>
                        <h2>"Precision Farming Revolution"</h2>
                        <p>Unleash the power of precision agriculture with our Fertilizer Suggestion Web App</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20230823/original/pngtree-d-render-of-agriculture-drone-spraying-fertilizer-on-sugar-cane-farm-picture-image_4788174.jpg"
                        alt="Second slide" height={700}
                    />
                    <Carousel.Caption>
                        <h2>"Smart Fertilization Solutions"</h2>
                        <p>Cultivate success with our Fertilizer Recommendation System – your one-stop solution</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.economictimes.com/thumb/msid-90926386,width-1600,height-900,resizemode-4,imgsize-42098/rising-fertilizer-costs-are-catching-up-to-rice-farmers-threatening-supplies.jpg"
                        alt="Third slide" height={700}
                    />
                    <Carousel.Caption>
                        <h3>"Cultivating Future Harvests"</h3>
                        <p>Empowering farmers with knowledge, our Fertilizer Recommendation System combines cutting-edge technology with agricultural expertise</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>


    <Container>
      <Row className='d-flex align-items-center justify-content-center'>
        
        <Col  lg={4}>
          <Card style={{  width: '20rem',marginTop:100 }}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/DL-52128%20Haifa%20Stream%20Podcast%20-%20Web%20Banners%20Chosen%20_0.jpg?itok=2WXSGgkd" />
          <Card.Body>
            <Card.Title>HaifaStream - Agriculture  </Card.Title>
            <Card.Text>
            Protected cropping systems are highly effective means producing more with less, yet true effectiveness must be backed up by true professionality. 
            </Card.Text>
            <Button variant="primary">  <a style={{color:'white',textDecoration:'none'}} href='https://www.justdial.com/Mumbai/Fertilizer-Dealers/nct-10203273'>Know More </a></Button>
          </Card.Body>
          </Card>
          </Col> 


          <Col  lg={4}>
          <Card style={{ width: '20rem',marginTop:100  }}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/article/33831__%20dealer_banners_810_400_A-01.jpg?itok=MmSBvnn1" />
          <Card.Body>
            <Card.Title>Find your nearest dealer</Card.Title>
            <Card.Text>
            Looking to buy fertilizers? from now on, you can contact your nearest Haifa's dealer quickly & easily, here's how.    Step 1:  Click on the menu bar 
            "Find a dealer"   
            </Card.Text>
            <Button variant="primary"><a style={{color:'white',textDecoration:'none'}} href='https://www.justdial.com/Mumbai/Fertilizer-Dealers/nct-10203273'>Know More </a></Button>
          </Card.Body>
          </Card>
          </Col> 

          <Col lg={4}>
          <Card style={{width: '20rem',marginTop:100 }}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/article/33876_Hifa_Group_Foliar_banners_B-04.png?itok=0EIAV5P4" />
          <Card.Body>
            <Card.Title>Foliar Fertilizer</Card.Title>
            <Card.Text>
            Boost your crops with Haifa's range of foliar fertilizers Discover the Haifa Bonus - small investment that leads to big results   Foliar application of fertilizers 
            </Card.Text>
            <Button variant="primary" ><a style={{color:'white',textDecoration:'none'}} href='https://www.justdial.com/Mumbai/Fertilizer-Dealers/nct-10203273'>Know More </a>  </Button>
          </Card.Body>
          </Card>
          </Col> 

      


          </Row>
          </Container>
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
          </>

  );
};
