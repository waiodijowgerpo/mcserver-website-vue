<template>
    <div class="row">
        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <h4 class="thin-text">404</h4>
                    <p>Nie znaleziono strony pod zakładką {{$route.path || "/"}}.</p>
                    <br>
                    <img src="https://cdn.discordapp.com/attachments/449574527345885184/684822326671704119/tenor.gif" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .thin-text {
        color: #ff0000;
    }
    img {
        border-radius: 10%;
    }
</style>