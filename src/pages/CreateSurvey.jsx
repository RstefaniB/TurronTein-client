import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SurveyAxios from '../services/surveyAxios';
import { useNavigate } from "react-router-dom";

const GetToKnowMe = (props) => {
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
                {/* <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>firstName</Form.Label>
                    <Form.Control
                        name='firstName'
                        onChange={updateNewSurvey}
                        type='text'
                        placeholder='firstName'
                    />
                </Form.Group> */}
                {/* <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>lastName</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='LastName'
                        onChange={updateNewSurvey}
                        name='lastName'
                    />
                </Form.Group> */}
                {/* <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        // as='textarea'
                        // rows={3}
                        type='Text'
                        placeholder='email'
                        name='email'
                        onChange={updateNewSurvey}
                    />
                </Form.Group> */}
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='age'
                        onChange={updateNewSurvey}
                        name='age'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Sport</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='sport'
                        onChange={updateNewSurvey}
                        name='sport'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='Text'
                        placeholder='city'
                        onChange={updateNewSurvey}
                        name='city'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Send
                </Button>
            </Form>
        </>
    );
};

export default GetToKnowMe;
