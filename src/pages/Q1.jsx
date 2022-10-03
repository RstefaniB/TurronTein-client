import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SurveyAxios from '../services/surveyAxios';
import { useNavigate } from "react-router-dom";

const Q1 = (props) => {

    const { newSurvey, setNewSurvey } = props
    const navigate = useNavigate();
    const surveyAxios = new SurveyAxios();
    // const [newSurvey, setNewSurvey] = useState({});

    const updateNewSurvey = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewSurvey({ ...newSurvey, [name]: value });
    };

    const createNewSurvey = (eventHTML) => {
        eventHTML.preventDefault();
        surveyAxios.createSurvey(newSurvey).then(() => {
            navigate('/galery');
        })
    }

    return (
        <>
            <Form onSubmit={createNewSurvey}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Interested in...</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='interested'
                        onChange={updateNewSurvey}
                        name='gender'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Send
                </Button>
            </Form>
        </>

    )
}

export default Q1;