<template>
    <div id="⏳" v-if="show">
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
        {{message || "Wczytuję dane, proszę poczekaj chwilę.."}}
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        message: String,
        show: Boolean
    }
}
</script>

<style scoped>
    #⏳ {
        color: #000000;
        text-align: center;
    }
    .progress {
        background-color: transparent;
    }
    .indeterminate {
        background-color: #cc493f;
    }
    .card-content {
        color: #000000;
    }
</style>