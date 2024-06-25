<template>
    <div>
        <h1>Login Form {{ title }}</h1><br>
        <input type="text" placeholder="Username" v-model="username"><br>
        <span>{{ username }}</span>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'LoginForm',
    props: ['title'],
    data() {
        const username = ref('');

        return {
            username
        }
    }
}
</script>

<style>

</style>