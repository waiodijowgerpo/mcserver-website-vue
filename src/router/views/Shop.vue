<template>
    <div class="row">
        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <div id="🛒">
                        <div id="icon">
                            <i class="fal fa-shopping-cart shop-icon"></i>
                        </div>
                        <div id="disabled" v-if="!isShopEnabled">
                            <h4 class="thin-text">Sklep jest obecnie wyłączony</h4>
                        </div>
                        <div id="shop" v-if="isShopEnabled">
                            <Loader :show="isShopLoading" message="Wczytywanie sklepu" />
                            <div id="empty" v-if="!isShopLoading && shopData.length === 0">
                                <h4>Sklep jest pusty</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #🛒 {
        color: rgb(0, 0, 0);
        text-align: center;
    }
    #🛒, #icon {
        padding-bottom: 15px;
    }
    #🛒, #disabled {
        color: rgb(194, 54, 54);
    }
    hr {
        width: 20%;
        background-color: rgb(194, 54, 54) !important;
    }
    .shop-icon {
        color: rgb(194, 54, 54);
        font-size: 4rem;
    }
</style>

<script>
import Loader from '../../components/Loader';

export default {
    components: {
        Loader,
    },
    data() {
        return {
            isShopEnabled: false,
            isShopLoading: true,
            //showShop: false,
            shopData: []
        };
    },
    mounted() {
        //this.isShopEnabled = this.$parent.shopEnabled;
        //var t = this.$parent;
        setTimeout(() => {
            this.isShopEnabled = true;
        }, 200);

        console.log(this.$parent.isShopEnabled);
    }
}
</script>