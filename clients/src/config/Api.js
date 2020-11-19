import axios from 'axios'

export default () => {
    return axios.create({
      baseURL: "http://localhost:24434/v1/api/",
      headers: {
        Authorization: `Bearer ${store.state.token}`,
      },
    });
}