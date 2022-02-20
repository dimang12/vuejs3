<template>
    <main class="h-100 ts-bg-primary">
        <div class="h-100 d-flex flex-row">
            <left-navigation></left-navigation>
            <div class="flex-grow-0 sub-left-nav bg-sub-left-nav p-3">
                Sub left navigation will be here
            </div>
            <div class="flex-grow-1 p-0 h-100 bg-light d-flex flex-column">
                <header class="bg-white shadow-lg">
                    <top-navigation></top-navigation>
                </header>
                <div class="flex-grow-1">
                    <router-view />
                </div>
                <app-footer></app-footer>
            </div>
        </div>
    </main>
</template>

<script>
import TopNavigation from "./components/layout/TopNavigation.vue";
import LeftNavigation from "./components/layout/LeftNavigation.vue";
import AppFooter from "./components/layout/AppFooter.vue";
export default {
  components: {
    TopNavigation,
    LeftNavigation,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.left-nav {
}

.left-nav a {
  display: block;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
