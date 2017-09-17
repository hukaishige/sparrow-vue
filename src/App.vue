<template>
    <div id="main">
        <Hello></Hello>
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'
    export default {
        name: 'app',
        components: {
            Hello
        }
    }
</script>

<style>
    #main {
        color: #2c3e50;
        margin-top: 60px;
    }
</style>