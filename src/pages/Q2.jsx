import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SurveyAxios from '../services/surveyAxios';
import { useNavigate } from "react-router-dom";

const Q2 = (props) => {

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
                    <Form.Label>Adding TT to your eating Habbits...</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='eatingHabbits'
                        onChange={updateNewSurvey}
                        name='eatingHabbits'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Send
                </Button>
            </Form>
        </>

    )
}

export default Q2;