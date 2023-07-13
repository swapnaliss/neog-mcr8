import React from 'react'
import NavbarPage from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className='heading-container'>
                <h1>Meetups</h1>
                <h4>search by</h4>
            </div>

            <Row>
                {data.meetups.map((meetup) => {
                    return (
                        <Col onClick = {() => navigate(`/meetup-details/${meetup.id}`)} key={meetup.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={meetup.eventThumbnail} />
                                <Card.Body>
                                    <Card.Title>{meetup.title}</Card.Title>
                                    <Card.Text>
                                        {meetup.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </Container>
    )
}
export default HomePage;