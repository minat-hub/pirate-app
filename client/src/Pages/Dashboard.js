import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const [Pirate, setPirate] = useState([]);
    function handleAddPirates() {
        // Handle registration logic here
        navigate('/pirates/new');
    }
    const handleDelete = (id) => {

        axios.delete("http://127.0.0.1:8000/api/pirates/delete/" + id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))

    }
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pirates")
            .then(res => setPirate(res.data))
            .catch(err => console.error(err))
    }, [Pirate])


    return (
        <Container>
            <Container className="mb-4 welcomecontainer">
                <Row>
                    <Col>
                        <h2>
                            Pirate Crew
                        </h2>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" className="mb-4 onboardingbutton" onClick={handleAddPirates}>
                            Add Pirate
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='continuer p-5 border border-dark'>
                <div className=' '>
                    {
                        Pirate.map((pirate, i) => {
                            return (
                                <div className='card border border-dark p-3'>
                                    <div className='d-flex justify-content-around'>
                                        <img src={pirate.ImgUrl} alt="PirateDashboardImages" width="80" height="80" />
                                        <div className='text-center w-75'>
                                            <h5>{pirate.name}</h5>
                                            <div className='d-flex justify-content-around'>
                                                <Link to={"/Pirates/" + pirate._id} className='btn btn-info'>View Pirate</Link>
                                                <button className='btn btn-danger' onClick={() => { handleDelete(pirate._id) }}>Walk the Plank</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </Container>
        </Container>

    );
}

export default Dashboard;