<template>
  <div class="eend-simple-card overflow-hidden rounded-lg bg-gray-200 pl-5 pr-5 pt-2 pb-2 box-border select-none cursor-pointer">
    {{text}}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>();
</script>

<style scoped>

</style>
