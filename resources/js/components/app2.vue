<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'test2' }">test2</router-link> |
            <router-link :to="{ name: 'testhome' }">testhome</router-link>
        </p>

        <div class="container">
            <router-view name="test2"></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
