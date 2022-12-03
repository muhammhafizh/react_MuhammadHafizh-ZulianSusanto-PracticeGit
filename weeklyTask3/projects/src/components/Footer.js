import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { BsInstagram, BsWhatsapp, BsLinkedin, BsCursor } from "react-icons/bs";

function FooterPage() {
  return (
    <footer className="text-light" style={{"backgroundColor": "#546a80"}}>
        <Container className='py-5 d-md-flex'>
            <Col sm={9} md={4} className='d-flex'>
                <p className="me-5 me-md-3">About</p>
                <p className="me-5 me-md-3">Policy</p>
                <p>Terms</p>
            </Col>
            <Col sm={9} md={4} className='text-md-center'>
                Made with Bootstrap
            </Col>
            <Col sm={9} md={4} className='text-md-end mt-3 mt-md-0'>
                <div>
                    <a href="https://www.instagram.com/hafizhzulian_/" style={{"textDecoration": "none", "color": "white"}} className="me-3">
                        <BsInstagram />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6281398477207" style={{"textDecoration": "none", "color": "white"}} className="me-3">
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-hafizh-zulian-susanto/" style={{"textDecoration": "none", "color": "white"}} className="me-3">
                        <BsLinkedin />
                    </a>
                    <a href="mailto: hafizhsusanto9@gmail.com" style={{"textDecoration": "none", "color": "white"}} className="me-3">
                        <BsCursor />
                    </a>
                </div>
            </Col>
        </Container>
    </footer>
  )
}

export default FooterPage