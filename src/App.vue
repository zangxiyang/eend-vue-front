<template>
  <eend-nav-bar/>

  <router-view/>
</template>

<script setup lang="ts">

import EendNavBar from "@/components/EendNavBar/EendNavBar.vue";
import EendMainLayout from "@/layout/EendMainLayout.vue";
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
