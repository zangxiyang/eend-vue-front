<template>
  <footer class="eend-footer bg-footer-gray text-gray-500 overflow-hidden">
    <div class="xl:eend-container max-md:w-full pt-14 pb-10">
      <div class="info-item flex items-center justify-center max-md:flex-col">
      <span class="info max-md:none max-md:mb-3 flex items-center">
        <span class="ml-2">
          <icon-copyright style="font-size: 14px"/>
          <span class="ml-1">Copyright</span>
          <span class="ml-1">2016-{{ nowYear }}</span>
          <span class="hidden max-md:inline-block">&nbsp;极束网络科技工作室&nbsp;版权所有</span>
          </span>
        <span class="ml-2 max-md:hidden">EendTech 极束网络科技工作室 版权所有</span>
      </span>
        <span class="info max-md:none max-md:mb-3 flex items-center">
          <a href="http://www.gsxt.gov.cn/" target="_blank">统一社会信用代码92500111MAAC66FC9C</a>
        </span>
        <span class="info max-md:none max-md:mb-3 flex items-center">
          <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备16011563号-1</a>
        </span>
        <span class="info max-md:none max-md:mb-3 flex items-center">
          <eend-simple-card text="Powered And Designed By 极束科技"/>
        </span>
      </div>
      <div class="info-item flex items-center justify-center pt-2">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011102000136" target="_blank">
        <span class="police info max-md:none flex items-center select-none">
          <img src="@/assets/img/gongan.png" alt="公网安备" height="18" width="18">
          <span class="ml-2">渝公网安备&nbsp;50011102000136号</span>
        </span>
        </a>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
// 获取当前年份
import EendSimpleCard from "@/components/EendCard/EendSimpleCard.vue";

const nowYear = new Date().getFullYear();
</script>

<style scoped>
@layer utilities {
  @variants responsive {
    .info.none::after{
      content: none;
    }
  }
}
.info::after {
  content: "|";
  font-size: 16px;
  font-weight: 500;
  color: #9ca3af;
  padding: 0 8px;
}
.info:last-child::after{
  content: '';
}
a:hover{
  color: #4e4e4e;
  transition: .2s ease-in-out;
  -webkit-transition: .2s ease-in-out;
}
</style>
