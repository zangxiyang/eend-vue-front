<template>
  <nav class="eend-header w-full">
    <div class="navbar fixed top-0 left-0 right-0 border-b border-gray-300 bg-white z-50">
      <div class="navbar-container relative flex w-full h-24 min-h-24 max-h-24 box-border">
        <div class="eend-nav-left h-24 flex items-center">
          <div class="more-apps pl-7 pr-7 relative">
            <a-button type="text" style="color: #676767" size="small">
              <template #icon>
                <icon-apps :style="{fontSize: '24px'}"/>
              </template>
            </a-button>
          </div>
          <div class="logo ml-7 select-none" title="极束科技">
            <router-link to="/" class="flex items-center">
              <img src="@/assets/img/logo.png" alt="LOGO" style="height: 30px; width: auto">
              <span class="logo-text text-4xl ml-2">Eend.Tech</span>
            </router-link>
          </div>

        </div>
        <div class="eend-nav-right h-24 flex flex-1 items-center justify-end pr-7">
          <router-link class="ml-6" v-for="item in navBarConfig" :key="item.title" :to="item.link">
            <a-button size="small" type="text" style="color: #676767">
              {{ item.title }}
            </a-button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import {navBarConfig} from "@/components/EendNavBar/config";


</script>

<style lang="scss" scoped>
.more-apps {
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 24px;
    background-color: #cecece;
    right: 0;
    top: 49%;
    transform: translateY(-50%);

  }
}

.logo {
  font-family: 'Audiowide', cursive;
}
</style>
<style>
.eend-nav-right .router-link-active.router-link-exact-active{
  background-color: var(--color-fill-3);
  border-color: transparent;
}
</style>
