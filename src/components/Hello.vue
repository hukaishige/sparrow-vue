<template>
    <div>
        <ul>
            <li v-for='i in n' class='myli'>{{i}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {n: 6}
        }

    }
</script>

<style>
    .myli {
        color: red
    }
</style>