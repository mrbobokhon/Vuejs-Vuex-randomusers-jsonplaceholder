<template>
  <div class="counter">
    <h1>{{ $store.state.counter }}</h1>
    <h1>
      {{ $store.state.counter }} <sup>2</sup> === {{ $store.getters.square }}
    </h1>
    <button
      class="btn btn-lg btn-outline-primary me-5"
      @click="$store.dispatch('increaseCounter', 100)"
    >
      +
    </button>
    <button
      class="btn btn-lg btn-outline-danger"
      @click="$store.dispatch('dicreaseCounter')"
    >
      -
    </button>
  </div>
  <div class="input">
    <h1>{{ $store.state.name }}</h1>
    <input
      type="text"
      v-model.trim.lazy="$store.state.name"
      :placeholder="$store.state.placeholder"
    />
  </div>

  <div class="selector">
    <select name="cars" v-model="$store.state.bg">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="purple">Purple</option>
    </select>
  </div>

  <div class="APIs">
    <div class="buttons" v-for="name in apis" :key="name">
      <button  @click="$store.dispatch('getApis', name)">{{ name }}</button>
    </div>
  </div>
  
  <h1>{{ $store.state.apis }} <br></h1>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      apis: ["posts", "comments", "albums", "photos", "users", "todos"],
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  text-align: center;
}
.buttons button{
  text-transform: capitalize;
}
</style>