<template>
<!--    StateList component provides the data for number of states visited-->
    <div class="summary">

        <h3>You have visited {{ total }} {{ statesPlural }}</h3>
<!--        v-if triggers if all states have been visited-->
        <p id="visited-all" v-if="visitedAll">
            You have visited all 50 states and the District of Columbia!
        </p>

    </div>
</template>

<script>
    export default {
        name: 'Summary',
        props: {
            total: Number,
            visitedAll: Boolean
        },
        computed: {
            // ternary operator to offer either state or states depending on number visited
            statesPlural(){
                return this.total === 1 ? 'state' : 'states'
            }
        }
    }
</script>

<style scoped>
    #visited-all {
        color: #be8234;
        font-weight: 600;
    }
</style>