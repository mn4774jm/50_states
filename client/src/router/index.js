import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'

// associate the base URL path / with the StateList component
// Sets the homepage of the app
export default new Router({
    routes: [
        {
            path:'/',
            component: StateList
        },
        {
            // create a route to /about
            path:'/about',
            component: About
        }
    ]
})