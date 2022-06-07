<template>
  <div>
    v-catalog
    <v-catalog-item />
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
  name: "v-calaog",
  data() {
    return {};
  },
  props: [],
  components: { vCatalogItem },
};
</script>

<style lang="scss" scoped>
</style>