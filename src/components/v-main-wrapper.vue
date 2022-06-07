<template>
    <div>
        <h1>Wrapper</h1>
        <v-cart />
         <v-catalog />
    </div>
</template>

<script>

import VCart from './v-cart.vue'

import vCatalog from './v-catalog.vue'
export default {
  components: { vCatalog, VCart },
    name:"v-main-wrapper",
    data() {
        return {
            newusers: []
        }
    },
    methods: {
    },
    props: [
        'users',
    ]
}
</script>

<style  scoped>

</style>