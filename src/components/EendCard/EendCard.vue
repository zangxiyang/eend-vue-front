<template>
  <div class="eend-card xl:xl-w overflow-hidden rounded-lg bg-gray-100 p-7 box-border cursor-pointer
  xl:mr-20 max-md:mt-10 max-md:first:mt-0 max-md:w-full max-md:ml-10 max-md:mr-10">
    <div class="top-icon mb-3">
      <slot name="icon"/>
    </div>
    <div class="title text-3xl pt-2">
      {{ title }}
    </div>
    <div class="desc text-2xl text-gray-600 pt-5 tracking-wide">
      {{ desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  desc: string
}>();
const emits = defineEmits(['test-func'])
</script>

<style lang="scss" scoped>
@layer utilities {
  @variants responsive{
    .eend-card{
      &.xl-w{
        width: 256px;
      }
    }
  }
}
.eend-card {
  height: 170px;
  .top-icon {
    height: 35px;
  }

  .desc {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
