import axios from "axios";

const Axios = axios.create({ baseURL: process.env.DB_ENDPOINT });

export default Axios;
