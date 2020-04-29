<template>
    <div id="state-list">

<!--        component added to be able to use data in the summary component-->
        <Summary
            v-bind:total="totalVisited"
            v-bind:visitedAll="visitedAll">
        </Summary>

<!--        flex-wrap displays the components in a grid-->
        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="state in states" v-bind:key="state.name">
                <State
                    v-bind:state="state"
                    v-on:isVisited="updateVisited"
                    ></State>
            </div>

            <div class="p-2" v-for="state in states" v-bind:key="state.name">
<!--                State component v-on:isVisited binds to updateVisited method-->
                <State
                    v-bind:state = 'state'
                    v-on:isVisited="updateVisited">

                </State>
            </div>
        </div>

    </div>
</template>

<script>
    // import and register StateList as a child
    import State from "@/components/State";
    import Summary from "./Summary";

    export default {
        name: 'StateList',
        components: {
            Summary,
            State
        },
        data() {
            return {
                states: [],
            }
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll() {
                // use state service from services to get all state data
                this.$stateService.getAll().then(data => {
                    this.states = data
                })
            },
            updateVisited(stateName, stateVisited) {
                this.$stateService.setVisited(stateName, stateVisited).then(() => {
                    this.getAll()
                })
            }
        },
        computed: {
            // computed properties to check how many states have been visited and if all states have been visited.
            // filters out states that are not tagged as visited. Checks to see if visited array length is equal to states length
            totalVisited(){
            let visited = this.states.filter(function(state) {
                return state.visited
            })
            return visited.length
            },
            visitedAll() {
                let visited = this.states.filter(function(state) {
                    return state.visited
                })
                return visited.length == this.states.length
            }
        }
    }
</script>

<style>

</style>