import { useEffect, useState } from 'react';
import SurveyAxios from '../services/surveyAxios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    Button,
    Col,
    Container,
    Modal,
    Pagination,
    Row,
} from 'react-bootstrap';
import Survey from '../components/Survey/Form';

const GaleryPage = () => {
    const surveyAxios = new SurveyAxios();
    const [surveys, setSurveys] = useState([]);
    const [pagination, setPagination] = useState({
        page: 0,
        maxPage: 0,
    });

    const paginationSurvey = (page) => {
        console.log(page);

        surveyAxios
            .getAllSurveys({ page })
            .then((surveys) => {
                console.log(surveys);
                setSurveys(surveys.results);
                setPagination({ page: surveys.page, maxPage: surveys.maxPage });
            });
    };

    const deleteSurvey = (id) => {
        console.log(id);
        surveyAxios
            .deleteSurvey(id)
            .then(() => {
                paginationSurvey(pagination.page)
            });
    };
    useEffect(() => {
        paginationSurvey(0)
    }, []);


    return (
        <div className='galery'>
            <Container>
                <Row xs={1} md={3} className='g-4'>
                    {surveys.map((survey) => (
                        <Col key={survey._id}>
                            <Survey survey={survey} deleteSurvey={deleteSurvey} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Pagination>
                <Pagination.First onClick={() => paginationSurvey(0)} />
                <Pagination.Prev onClick={() => paginationSurvey(pagination.page - 1)} />
                <Pagination.Next onClick={() => paginationSurvey(pagination.page + 1)} />
                <Pagination.Last onClick={() => paginationSurvey(pagination.maxPage)} />
            </Pagination>
        </div>
    );
};

export default GaleryPage;
