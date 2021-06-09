<template>
  <nav class="m-0 p-0 container-fluid">
    <div class="d-flex p-0">
      <div class="fs-1 fw-bold text-white mx-4 p-0">
        Self-service certificate
      </div>
      <div
        v-if="token"
        class="ms-auto btn btn-light btn-outline-danger my-2 p-auto mx-3 logout"
      >
        <div class="text-center p-0 m-0">
          Logout
        </div>
      </div>
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
}
.logout {
  width: 100px;
  height: 40px;
}
</style>
