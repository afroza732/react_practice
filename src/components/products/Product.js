
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import products from './Products';
const Product = () => {
  return (
    <Container>
        <Row>
            {
                products.map((product,index) => {
                    return  <Col sm={3} key={index} style={{ paddingBottom: '10px'}}>
                                <Card style={{ width: '18rem',height:'400px' }}>
                                    <Card.Img style={{height:'150px' }}  variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        {/* <Card.Text>
                                          {product.description}
                                        </Card.Text> */}
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> Price: {product.price}</ListGroup.Item>
                                        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Add To Cart</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                })
            }
        </Row>
    </Container>
  );
};

export default Product;