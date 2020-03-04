<template>
    <main>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </main>
</template>

<script>
export default {
    name: "Content",
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>