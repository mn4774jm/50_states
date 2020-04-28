<template>
    <div id="state-list">

<!--        flex-wrap displays the components in a grid-->
        <div class="d-flex flex-wrap justify-content-around">

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

    export default {
        name: 'StateList',
        components: {
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
        }
    }
</script>

<style>

</style>