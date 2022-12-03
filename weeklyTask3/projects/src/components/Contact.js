import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function ContactPage() {
  return (
    <div className='mt-5' style={{"background": "linear-gradient(0deg, #dfe9f3 0%, #ffffff 100%)"}}>
        <Container className='text-center py-5'>
            <Col>
                <Row>
                    <h5 className='mb-4 mt-3'>
                        Let's keep in touch
                    </h5>
                </Row>
                <Row>
                    <Col></Col>
                    <Col sm={9} md={5}>
                        <Form>
                            <Row className='g-3'>
                                <Col>
                                    <FloatingLabel controlId="floatingInputGrid" label="first name">
                                        <Form.Control type="text" placeholder="first name" />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingInputGrid" label="last name">
                                        <Form.Control type="text" placeholder="last name" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <FloatingLabel controlId="floatingInputGrid" label="Email address" className='mt-3'>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mt-3'>
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Col sm={12} className='mt-5'>
                                <Button variant="secondary" type='submit'>Submit</Button>
                            </Col>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
        </Container>
    </div>
  )
}

export default ContactPage