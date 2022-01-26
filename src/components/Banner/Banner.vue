<template>
  <div class="banner w-full xl:min-w-1300 h-banner mt-24 mb-28 bg-gray-300 relative overflow-hidden">
    <div class="banner-content-container xl:eend-container max-md:w-full h-banner flex items-center max-md:justify-center">
      <div class="banner-content z-1">
        <div class="banner-title banner-font text-7xl text-gray-800">极束网络科技工作室</div>
        <div class="pt-14 pb-14 banner-font text-4xl text-gray-700">开放、合作、共赢</div>
        <div class="banner-button-group flex items-center">
          <a-button type="primary" size="large">联系我们</a-button>
          <a-button class="ml-10" size="large">加入我们</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.banner{
  &::after{
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1300px;
    height: 100%;
    background: url(../../assets/img/banner.png) 100%/contain no-repeat;
  }
}
.banner-font{
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  @apply antialiased
}
</style>
