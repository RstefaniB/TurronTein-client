import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SurveyAxios from '../services/surveyAxios';
import { useNavigate } from "react-router-dom";

const Q3 = (props) => {

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
            < Form >


                {['checkbox'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-3">
                        <Form.Check
                            reverse
                            label="yema"
                            name="yema"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="chocolate"
                            name="chocolate"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="Frutos"
                            name="Frutos"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="hazelnut"
                            name="hazelnut"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="tradicional"
                            name="tradicional"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Button variant='primary' type='submit'>
                            Send
                        </Button>

                    </div>
                ))}

            </Form>
        </>

    )
}

export default Q3;





