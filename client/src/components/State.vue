<template>
    <div class="state-summary p-2 rounded">

        <span class="m-2">{{ state.name }}</span>
        <p>
            <!--checkbox v-model the state visited data-->
            <!--v-on:change emit is Visited to parent-->
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>

        <p>
<!--            add img element inside router-link-->
<!--            use v-bind to set the name parameter in the router-link-->
            <router-link v-bind:to="{ name: 'detail', params: { state: stateName } }">
                <img class="map-icon" src="@/assets/icons8-map.png">
            </router-link>
        </p>

    </div>
</template>

<script>

    export default {
        name: 'State',
        props: {
            state: Object
        },
        data() {
            return {
                // data has state name and state visited copied from state prop
                stateName: this.state.name,
                stateVisited: this.state.visited,
            }
        }
    }
</script>

<style scoped>
    .state-summary {
        height: 8em;
        width: 10em;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }

    .map-icon {
        width: 2em;
        height: 2em;
    }
</style>