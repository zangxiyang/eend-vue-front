<template>
  <banner/>
  <home-item
      title="丰富的解决方案"
      top-title="多应用场景"
      desc="面对多应用的场景，我们提供丰富与成熟的解决方案，面对特殊场景，我们也可以通过合理的技术选型来快速构建您所需要的应用，提升项目开发效率，快速交付。">
    <div class="card-group flex items-center mt-20">
      <eend-card
          title="服务端"
          desc="基于现有的Java系生态，构建后端应用及微服务">
        <template #icon>
          <icon-bytedance-color style="font-size: 32px"/>
        </template>
      </eend-card>
      <eend-card
          desc="主要针对Vue3/Vue2系生态构建前端应用"
          title="前端">
        <template #icon>
          <icon-lark-color style="font-size: 32px"/>
        </template>
      </eend-card>
      <eend-card
          desc="通过uniApp完成多端开发一套部署多个小程序平台"
          title="小程序">
        <template #icon>
          <svg t="1642170590248" style="font-size: 32px" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="2915" width="200" height="200">
            <path
                d="M512 0C229.376 0 0 229.376 0 512c0 282.624 229.376 512 512 512 282.624 0 512-229.376 512-512 0-282.624-229.376-512-512-512z"
                fill="#0091FF" p-id="2916"></path>
            <path
                d="M657.408 266.24c-90.112 0-161.792 73.728-161.792 163.84v163.84c0 59.392-49.152 108.544-108.544 108.544-59.392 0-108.544-49.152-108.544-108.544 0-59.392 49.152-108.544 108.544-108.544V430.08c-90.112 0-161.792 73.728-161.792 163.84 0 90.112 71.68 163.84 161.792 163.84s161.792-73.728 161.792-163.84v-163.84c0-59.392 49.152-108.544 108.544-108.544 59.392 0 108.544 49.152 108.544 108.544 0 59.392-49.152 108.544-108.544 108.544v55.296c90.112 0 161.792-73.728 161.792-163.84 0-90.112-71.68-163.84-161.792-163.84z"
                fill="#FFFFFF" p-id="2917"></path>
          </svg>
        </template>
      </eend-card>
    </div>
  </home-item>
</template>

<script setup lang="ts">

import Banner from "@/components/Banner/Banner.vue";
import HomeItem from "@/components/HomeItem/HomeItem.vue";
import EendCard from "@/components/EendCard/EendCard.vue";
</script>

<style lang="scss" scoped>

</style>
