import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../apollo/Get_Data_Schema'


function AboutPage() {
    const { data } = useQuery(GET_USERS);

    const image = data?.Website_Portofolio[0].imageURL
    const about = data?.Website_Portofolio[0].textAbout
    console.log(data?.Website_Portofolio[0])

  return (
   <Container className='text-center mb-5'>
    <Row className='pb-5 pb-md-0'>
        <Col sm={5} md={6}>
            <img src={image} alt="about-me" width={"300vw"} />
        </Col>
        <Col sm={5} md={6} className='text-md-start mt-5 mt-md-0'>
            <h4 className="fw-bold">About me</h4>
            <p className="mt-3 mt-md-5">
                {about}
            </p>
            <button 
                style={{"borderRadius": 10, "backgroundColor": "#555"}}
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