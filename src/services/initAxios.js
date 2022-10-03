import axios from 'axios';
//para extender la ruta a traves de un path
class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `http://localhost:5005/api${path}`
        })
    }
}

export default InitAxios;