<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>

    <layout-header @showSearch="ev => (showSearch = ev)"> </layout-header>
    <router-view :key="keyPath"></router-view>
    <layout-footer v-if="showFoot"></layout-footer>
    <search v-if="showSearch" @close="showSearch = false"></search>
  </div>
</template>

<script>
import LayoutHeader from './pages/layout/layout-header'
import LayoutFooter from './pages/layout/layout-footer'
import Search from './search'
export default {
  name: 'app',
  components: {
    LayoutFooter,
    LayoutHeader,
    Search
  },
  data() {
    return {
      showFoot: true,
      keyPath: '',
      showSearch: false
    }
  },
  watch: {
    $route(val) {
      this.keyPath = val.path
      if (
        val.name === 'works' ||
        val.name === 'contact-us' ||
        val.name === 'dynamics' ||
        val.name === 'team' ||
        val.name === 'company-promotion' ||
        val.name === 'welfare' ||
        val.name === 'coronavirus'
      ) {
        this.showFoot = false
      } else {
        this.showFoot = true
      }
    }
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="postcss">
@import 'assets/styles/tailwind.css';
@import './index.css';
#app {
  min-width: 1200px;
  margin: auto;
  /* overflow: scroll; */
  min-height: 766px;
}
</style>
