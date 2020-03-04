<template>
    <footer class="page-footer">
        <div class="footer-copyright">
            <div class="container">
                © Copyright {{year || 2020}} ONLYWARS
                <div class="right">Chronione przez <a v-bind:href="antycheatWebsite" target="_blank" class="red-text"><i class="far fa-shield"></i>  XSGUARD</a></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        year: Number,
    },
    data() {
        return {
            antycheatWebsite: "https://xsguard.pl/"
        };
    }
}
</script>

<style scoped></style>