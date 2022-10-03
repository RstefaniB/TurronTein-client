import InitAxios from "./initAxios";

class SurveyAxios extends InitAxios {
    constructor() {
        super('/survey')//pq queremos que todas las rutas vengan de survey. 
        // ya no hay que escribir en todas las rutas barra cocktail pq en 
        // nuestro back todas las rutas tienen inicio con /survey
    }

    getAllSurveys(query) {
        return this.axios.get(`/?offset=${query.page}`).then((response) => response.data)
    }

    getOneSurveyById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    createSurvey(body) {
        return this.axios.post('/', body).then((response) => response.data);
    }

    updateSurvey(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }

    deleteSurvey(id) {
        return this.axios.delete(`/${id}`).then((response) => response.data);
    }
}

export default SurveyAxios;