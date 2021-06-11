<template>
  <nav class="m-0 p-0 container-fluid">
    <div class="d-flex p-0">
      <router-link
        :to="{ name: 'Main' }"
        class="fs-2 fw-bold text-white mx-4 p-0"
        style="text-decoration: none; color: inherit;"
        >Self-service certificate</router-link
      >
      <router-link
        v-if="token"
        :to="{ name: 'Login' }"
        class="ms-auto btn btn-light btn-outline-danger my-2 p-auto mx-3 logout"
        style="text-decoration: none;"
        ><div class="text-center p-0 m-0">
          Logout
        </div></router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    token: Boolean,
  },
}
</script>

<style scoped>
nav {
  background: #4a86de;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 56px;
}
.logout {
  width: 100px;
  height: 40px;
}
</style>
