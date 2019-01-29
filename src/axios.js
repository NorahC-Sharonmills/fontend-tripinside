import axios from 'axios'
import config from "./config";
export default  axios.create({
    baseURL: "https://serene-hollows-97270.herokuapp.com",
    withCredentials:true
})