import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <div style={{"background": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"}}>
        <Container className='mt-5 mb-4 mb-md-5'>
            <Row className='py-5'>
                <Col md={12} sm={9} className='py-5 p-md-5 text-center'>
                    <h3>Hello saya hafizh</h3>
                    <p>Saya adalah front end developer dan hobby mendesign web atau aplikasi</p>
                    <button 
                    style={{"border-radius": 10, "background-color": "#555"}}
                    className="px-3 py-2 text-light border border-0"
                    onMouseEnter={(e) => e.target.style.background = '#333'}
                    onMouseLeave={(e) => e.target.style.background = '#555'}
                    >
                        Hire me
                    </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomePage