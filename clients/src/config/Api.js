import axios from 'axios'

export default () => {
    return axios.create({
      // baseURL: "http://localhost:24434/v1/api",
      baseURL: "https://kolo-cash.herokuapp.com/v1/api",
      // baseURL: "/v1/api",
    });
}