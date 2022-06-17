import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Card, Container, Form, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Login = () => {
  const [dataLogin, setDataLogin] = React.useState<any>([])



  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://6221521cafd560ea69ad5ed1.mockapi.io/users',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setDataLogin(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }, [])

console.log(dataLogin)

  return (
    <Container fluid className='login px-0'>
      <Container className='d-flex justify-content-center mt-4'>
        <Image src='../public/assets/bd_logo.png' alt="logo"/>
      </Container>
      <Container className='d-flex justify-content-center'>
      <Card style={{ width: '18rem', marginTop: '5%' }} className="d-flex">
      <Card.Img variant="top" src="https://img.icons8.com/pastel-glyph/2600/gender-neutral-user.png" style={{width: '150px', margin :'auto', filter: 'invert(47%) sepia(26%) saturate(1461%) hue-rotate(314deg) brightness(98%) contrast(99%)'}} />
      <Card.Body>
        <Card.Title className='text-center mb-4' style={{color:'#F95A52'}}>Login</Card.Title>
        <Container>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required type="email" placeholder="Enter user@name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      <Container className='text-center'>
      <Button variant="primary" type="submit" className='col-8'>
        Submit
      </Button>
      </Container>
    </Form>
        </Container>
      </Card.Body>
    </Card>
      </Container>
    </Container>
  );
}

export default Login
