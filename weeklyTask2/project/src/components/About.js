import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../About-me.svg'

function AboutPage() {
  return (
   <Container className='text-center mb-5'>
    <Row className='pb-5 pb-md-0'>
        <Col sm={5} md={6}>
            <img src={image} alt="about-me" width={"300vw"} />
        </Col>
        <Col sm={5} md={6} className='text-md-start mt-5 mt-md-0'>
            <h4 className="fw-bold">About me</h4>
            <p className="mt-3 mt-md-5">
                Saya muhammad hafizh zulian susanto
                dan suka membuat user interface yang baik dan mengimplementasikannya ke dalam kode
                saya juga memiliki semangat untuk bekerja di bidang pengembangan web, terutama di bidang front-end developer.
            </p>
            <button 
                style={{"border-radius": 10, "background-color": "#555"}}
                className="px-3 py-2 text-light border border-0 mt-3 mt-md-5"
                onMouseEnter={(e) => e.target.style.background = '#333'}
                onMouseLeave={(e) => e.target.style.background = '#555'}
                >
                    Download resume
            </button>
        </Col>
    </Row>
   </Container>
  )
}

export default AboutPage