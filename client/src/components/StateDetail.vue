<template>
    <div class="state-detail p-2">

        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>

        <div id="map-container">
<!--            add l-map component, v-bind to Vue data to set leaflet properties-->
<!--            bind tile layer to component properties-->
            <l-map
                ref="stateMap"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

    export default {
        name: 'StateDetail',
        components: {
            LMap, LTileLayer
        },
        data () {
            return {
                state: {
                    name: ''
                },
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 2,
                center: [44, -103], //initialize at geographic center of us
                bounds: null
            }
        },
        mounted() {
            this.state.name = this.$route.params.state
            // Not required, prevents user dragging map away from state.
            // User can still zoom in and out
            this.$refs.stateMap.mapObject.dragging.disable()
            this.fetchSomeData()
        },
        methods: {
            // overwrites state object with data from the server
            fetchSomeData() {
                // sets map data for the state once the state data has been fetched from the API
                this.$stateService.getOne( this.state.name ).then( data => {
                    this.state = data
                    this.zoom = data.zoom
                    this.center = [data.lat, data.lon]
                    // fly to new center coordinates to center on state
                    this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
                }).catch( err => console.error(err))
            }
        }
    }
</script>

<style scoped>
    /*height required. default is 0*/
    #map-container {
        height: 30em;
    }
</style>