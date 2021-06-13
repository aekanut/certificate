<template lang="">
    <NavBar :token="true"></NavBar>
    <Form></Form>
    <Success></Success>
</template>
<script>
import Form from '../components/Form.vue'
import NavBar from '../components/NavBar.vue'
import Success from '../components/Modals/Success.vue'
export default {
    components: {
        'Form': Form,
        'NavBar': NavBar,
        Success
    }
}
</script>
