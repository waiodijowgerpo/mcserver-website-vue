<template>
    <header>
        <nav role="navigation">
            <div class="nav-wrapper container">
                <a id="logo-container" class="brand-logo thin-text">{{this.$route.name || "404"}}</a>
                <ul id="🧾" class="side-nav fixed">
                    <li id="🖌"></li>
                    <li v-for="item in items" v-bind:key="item.path">
                        <router-link class="waves-effect" v-bind:to="item.path">
                            <i v-bind:class="item.icon" v-if="item.icon.length > 0"></i>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <a href="#" data-activates="🧾" class="button-collapse">
                    <i class="mdi-navigation-menu"></i>
                </a>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: "Sidenav",
    data() {
        return {
            items: [
                {
                    path: "/",
                    icon: "fal fa-home",
                    title: "Strona główna"
                },
                {
                    path: "/shop",
                    icon: "fal fa-shopping-cart",
                    title: "Sklep"
                }
            ]
        };
    },
    mounted() {
        window.$('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true
        });
    }
};
</script>

<style>
    .foreground, .side-nav {
        background: white;
        color: black;
    }
    .foreground, .foreground .collapsible-header, .foreground .collapsible-body, .foreground thead {
        border-color: #ccc;
    }
    .foreground table.hoverable > tbody > tr:hover, .side-nav li:hover {
        background: #eee;
    }

    nav {
        background: transparent !important;
        box-shadow: none !important;
    }
    td {
        border-radius: 0;
    }

    nav, nav .brand-logo, .side-nav.fixed a, .collapsible-header, .collection .collection-item,
    footer.page-footer, footer.page-footer .footer-copyright, footer.page-footer .footer-copyright a {
        background: transparent;
        color: inherit;
    }

    #menu-button {
        font-size: 28px;
    }

    li.active {
        color: #cc493f !important;
        transition: all .2s;
    }
    .waves-effect {
        z-index: 0 !important;
    }
    .waves-ripple {
        background-color: rgba(255, 193, 189, 1) !important;
    }
</style>

<style scoped>
    a.router-link-exact-active {
        color: #cc493f !important;
        transition: all .2s;
    }

    ul.side-nav.fixed li {
        background-color: rgba(0, 0, 0, 0);
    }
    ul.side-nav.fixed li:hover {
        background-color: rgba(207, 78, 78, 0.115);
        transition: all .3s;
    }

    #🖌 {
        text-align: center;
        width: 210px;
        height: 64px;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('data:image/png;base64,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');
        padding-bottom: 20px;
        margin-left: 15px;
    }
</style>