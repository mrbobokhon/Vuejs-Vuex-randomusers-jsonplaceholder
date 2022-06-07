<template>
  <div id="nav" v-if="show">
    <nav class="navbar navbar-expand-lg" :style="{
      'background-color': $store.state.bg
    }">
      <div class="container-fluid mx-5 mt-2">
        <a class="navbar-brand" href="#"
          ><img src="./assets/shop-logo.png" class="img-fluid" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link"  :post="posts" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"  to="/about">About</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn bg-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <!-- Router-View -->
    <router-view />
    <!-- Router-View -->

    <!-- {{ posts }} -->
  </div>
  <Loader v-else></Loader>
</template>
<script>
// Import-Component
import Loader from "./components/Loader";
// import wrapper from './components/v-main-wrapper'
// Import-Component

// Axios
// import axios from "axios";
// Axios

export default {
  data() {
    return {
      show: false,
      posts: [],
    };
  },
  methods: {
    showVue(){
        try {
          setTimeout(() => {
          this.show = true  
          }, 1000);
      } catch (error) {
        alert(error)
      }
    }
  },
  mounted() {
    this.showVue()
  },
  components: {
    Loader,
  },
};
</script>
<style>
#nav a.router-link-exact-active {
  color: rgb(255, 193, 7) !important;
}
.navbar ul li a {
  color: #000 !important;
  font-size: 18px;
}
.navbar .navbar-brand img {
  width: 6rem;
  height: 4rem;
}
</style>
