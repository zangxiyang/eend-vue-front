<template>
  <div class="eend-home-section eend-container">
    <div class="section-introduction" :class="{'flex justify-center': center}">
      <div class="content overflow-hidden w-1/2">
        <div class="section-top-title text-4xl text-blue-600 font-bold pb-4" v-if="topTitle">{{ topTitle }}</div>
        <div class="section-title text-7xl">{{ title }}</div>
        <div class="section-desc pt-8 text-3xl text-gray-500 leading-10">{{ desc }}</div>
      </div>
      <div class="detail">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prop = withDefaults(defineProps<{
  title: string,
  topTitle?: string,
  center?: boolean,
  desc?: string
}>(), {
  center: false,
  title: '默认标题'
})
</script>

<style scoped>

</style>
