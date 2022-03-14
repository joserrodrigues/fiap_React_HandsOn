import api from "../Common/api";

const getPersons = (prodID) => api.get("/persons/?" + prodID);
const getPersonsPost = (data) => api.post("/persons/getPersons", data);
const getAllPersons = (data) => api.get("/persons/?" + data);


export default {
    getPersons,
    getPersonsPost,
    getAllPersons
};