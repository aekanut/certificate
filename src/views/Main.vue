<template>
  <NavBar :token="true"></NavBar>
  <div class="container">
      <div class="d-flex justify-content-center">
        <Table></Table>
      </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue"
import NavBar from "../components/NavBar.vue"
export default {
  components: {
    Table: Table,
    NavBar: NavBar,
  },
}
</script>
<style></style>
