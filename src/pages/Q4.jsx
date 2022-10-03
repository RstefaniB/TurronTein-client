import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SurveyAxios from '../services/surveyAxios';
import { useNavigate } from "react-router-dom";

const Q4 = (props) => {

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
                            label="softchew"
                            name="softchew"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="semi-hard"
                            name="semi-hard"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="gominola"
                            name="gominola"
                            type={type}
                            onChange={updateNewSurvey}

                        />
                        <Form.Check
                            reverse
                            label="hard"
                            name="hard"
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

export default Q4;





