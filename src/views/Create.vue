<template lang="">
    <NavBar :token="true"></NavBar>
    <Form></Form>
</template>
<script>
import Form from '../components/Form.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components: {
        'Form': Form,
        'NavBar': NavBar
    }
}
</script>
<style lang="">
    
</style>