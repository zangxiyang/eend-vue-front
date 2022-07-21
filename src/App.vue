<template v-cloak>
  <eend-nav-bar/>
  <main>
    <router-view/>
  </main>
  <eend-footer/>
</template>

<script setup lang="ts">

import EendNavBar from "@/components/EendNavBar/EendNavBar.vue";
import EendMainLayout from "@/layout/EendMainLayout.vue";
import EendFooter from "@/components/EendFooter/EendFooter.vue";
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
