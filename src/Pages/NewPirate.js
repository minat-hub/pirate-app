
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';



const NewPirate = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [treasure, setTreasure] = useState(0);
  const [phrases, setPhrases] = useState("");
  const [position, setPosition] = useState("");
  const [pegLeg, setPegLeg] = useState(true);
  const [eyePatch, setEyePatch] = useState(true);
  const [hookHand, setHookHand] = useState(true);
  const [error, setError] = useState({
    name: "",
    imgUrl: "",
    treasure: "",
    phrases: "",
    position: "",
  });

  const navigate = useNavigate();


  function handleDashboard() {

    navigate('/pirates');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http:127.0.0.1:27017/api/pirates/new", {
        name,
        imgUrl,
        treasure,
        phrases,
        position,
        pegLeg,
        eyePatch,
        hookHand,
      })
      .then(() => navigate("/pirates/"))
      .catch((err) =>
        setError({
          name: err.response.data.errors.name?.message,
          imgUrl: err.response.data.errors.imgUrl?.message,
          treasure: err.response.data.errors.treasure?.message,
          phrases: err.response.data.errors.phrases?.message,
          position: err.response.data.errors.position?.message,
        })
      );
  };

  const handleChange = (e, setFunction) => {
    const { value } = e.target;
    setError({
      ...error,
      [e.target.name]: value ? "" : `${e.target.name} is required`,
    });
    setFunction(value);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setError({
      ...error,
      position: value === "Captain" && position ? "only one Captain is allowed" : "",
    });
    setPosition(value);
  };

  return (
    <Container>
      <Container className="mb-4 welcomecontainer">
        <Row>
          <Col>
            <h2>
              Add Pirate
            </h2>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="mb-4 onboardingbutton" onClick={handleDashboard}>
              Crew Board
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className='continuer p-5 border border-dark'>

        <div className="">
          <div className="card p-5">
            {Object.values(error).map((errorMessage, index) => (
              <small className="text-danger" key={index}>
                {errorMessage}
              </small>
            ))}
            <form onSubmit={handleSubmit}>
              <div className="form-group my-2">
                <label htmlFor="name">Pirate Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e, setName)}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="imgUrl">Image URL</label>
                <input
                  type="url"
                  id="imgUrl"
                  className="form-control"
                  name="imgUrl"
                  value={imgUrl}
                  onChange={(e) => handleChange(e, setImgUrl)}
                />
              </div>
              <div>
                <label htmlFor="treasure"># of Treasure Chests</label>
                <input
                  type="number"
                  id="treasure"
                  className="form-control"
                  name="treasure"
                  value={treasure}
                  onChange={(e) => handleChange(e, setTreasure)}
                />
              </div>

              <div className="form-group my-2">
                <label htmlFor="phrases">Pirate Catch Phrases</label>
                <textarea
                  id="phrases"
                  className="form-control"
                  name="phrases"
                  value={phrases}
                  onChange={(e) => handleChange(e, setPhrases)}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="position">Crew Position</label>
                <select
                  id="position"
                  className="form-control"
                  name="position"
                  value={position}
                  onChange={handleSelectChange}
                >
                  <option value="">--Select Position--</option>
                  <option value="Captain">Captain</option>
                  <option value="First Mate">First Mate</option>
                  <option value="Quarter Master">Quarter Master</option>
                  <option value="Boatswain">Boatswain</option>
                  <option value="Powder Monkey">Powder Monkey</option>
                </select>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pegLeg"
                  name="pegLeg"
                  checked={pegLeg}
                  onChange={(e) => setPegLeg(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="pegLeg">
                  Peg Leg
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="eyePatch"
                  name="eyePatch"
                  checked={eyePatch}
                  onChange={(e) => setEyePatch(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="eyePatch">
                  Eye Patch
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hookHand"
                  name="hookHand"
                  checked={hookHand}
                  onChange={(e) => setHookHand(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="hookHand">
                  Hook Hand
                </label>
              </div>
              <div className="text-center my-2">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Add Pirate
                </button>
              </div>
            </form>
          </div >
        </div >
      </Container>
    </Container>
  );
};
export default NewPirate;
