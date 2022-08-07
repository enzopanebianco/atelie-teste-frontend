import axios from 'axios'

const api = axios.create({
    baseURL:'http://api.teste-frontend.ateliedepropaganda.com.br/v1'
})


export default api