<template>
  <NavBar :token="false"></NavBar>
  <div class="center">
    <Login></Login>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import Login from "../components/Login.vue"
export default {
  components: {
    'NavBar': NavBar,
    'Login': Login
  }
}
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
