import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'

// associate the base URL path / with the StateList component
// Sets the homepage of the app
// StateDetail component uses :state parameter so this route will be used for each state
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
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})