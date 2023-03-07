import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const PirateDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pirate, setPirate] = useState({});
    const [pegLeg, setpegLeg] = useState(false);
    const [eyePatch, seteyePatch] = useState(false);
    const [hookHand, sethookHand] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:27017/api/pirates/' + id)
            .then(res => {
                setPirate(res.data)
                setpegLeg(!res.data.pegLeg)
                seteyePatch(!res.data.eyePatch)
                sethookHand(!res.data.hookHand)
            })
            .catch(err => console.error(err));


    }, [id])

    const PegLeg = (e) => {
        e.preventDefault();
        axios.put('http://127.0.0.1:27017/api/pirates/update/' + id, {
            pegLeg
        })
            .then(res => window.location.reload(false))
            .catch(err => console.error(err))
    }
    const EyePatch = (e) => {

        axios.put('http://127.0.0.1:27017/api/pirates/update/' + id, {
            eyePatch
        })
            .then(res => { window.location.reload(false) })
            .catch(err => console.error(err))
    }
    const HookHand = (e) => {
        e.preventDefault();
        axios.put('http://127.0.0.1:27017/api/pirates/update/' + id, {
            hookHand
        })
            .then(res => { window.location.reload(false) })
            .catch(err => console.error(err))
    }



    return (
        <div className='continuer m-5'>
            <div className='border border-dark p-5 d-flex justify-content-center align-items-center '>
                <h1>{pirate.name}</h1>
            </div>
            <div className='continuer p-5 border border-dark'>
                <div className='d-flex justify-content-around'>
                    <div>
                        <img src={pirate.ImgUrl} width="500" height="500" />
                        <h1>"{pirate.Phrases}"</h1>
                    </div>
                    <div className='card p-5 w-50'>
                        <h2 className='text-center'>About</h2>
                        <h4>position: {pirate.position}</h4>
                        <h4>Treasure: {pirate.Treasure}</h4>
                        <h4>Peg Leg: {pirate.pegLeg ? "Yes " : "No "}
                            <button onClick={PegLeg} className={pirate.pegLeg ? "btn btn-danger" : "btn btn-success"}>{pirate.pegLeg ? "No" : "Yes"}</button>
                        </h4>
                        <h4>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}
                            <button onClick={EyePatch} className={pirate.eyePatch ? "btn btn-danger" : "btn btn-success"}>{pirate.eyePatch ? "No" : "Yes"}</button>
                        </h4>
                        <h4>Hook Hand: {pirate.hookHand ? "Yes" : "No"}
                            <button onClick={HookHand} className={pirate.hookHand ? "btn btn-danger" : "btn btn-success"}>
                                {pirate.hookHand ? "No" : "Yes"}
                            </button></h4>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PirateDetails;