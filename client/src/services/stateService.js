// makes a request to the route created routes/states.js
import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    // create a setVisited function that sends a PATCH request - this will be handled by the route created in routes/states.js
    setVisited(stateName, visited) {
        return axios.patch('/api/state/' + stateName, { visited: visited }).then(response => {
            return response.data
        })
    }
}