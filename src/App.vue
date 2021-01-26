<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav bg-primary">
        <router-link :to="{ name: 'Home' }" class="nav-item nav-link">
          Home
        </router-link>
        <router-link :to="{ name: 'Cars' }" class="nav-item nav-link ">
          Cars
        </router-link>
        <router-link :to="{ name: 'Houses' }" class="nav-item nav-link">
          Houses
        </router-link>
        <!-- <router-link class="nav-item nav-link" :to="{ name: 'About' }">
        About
      </router-link> -->
      </div>
    </nav>
    <!-- NOTE Router-View allows the Router to determine which component gets loaded -->
    <div class="container-fluid">
      <router-view />
    </div>
    <footer class="container-fluid bg-dark text-light">
      <div class="row">
        <div class="col py-5 text-center">
          <p>Made with ♥ by CodeWorks</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import './assets/scss/_variables.scss';
@import 'bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
  }

.router-link-exact-active {
  color: #42b983 !important;
}}

</style>
