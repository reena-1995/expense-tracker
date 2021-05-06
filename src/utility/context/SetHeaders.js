import axios from "axios";
const setAuthToken = token => {

    axios.defaults.timeout = 60000;
    axios.defaults.headers.common["authorization"]              =   axios.defaults.headers.common["autherization"]!==''?axios.defaults.headers.common["autherization"]:"";
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["authorization"]              =   `Bearer ${token}`;
    } 

};

export default setAuthToken;