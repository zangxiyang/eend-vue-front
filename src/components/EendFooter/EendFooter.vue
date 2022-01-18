<template>
  <footer class="eend-footer bg-footer-gray text-gray-500">
    <div class="eend-container pt-14 pb-14">
      <div class="info-item flex items-center justify-center">
      <span class="info flex items-center">
        <span class="ml-2"><icon-copyright style="font-size: 14px"/><span class="ml-1">Copyright</span> 2016-{{
            nowYear
          }}</span>
        <span class="ml-2">EendTech 极束网络科技工作室 版权所有</span>
      </span>
        <span class="info flex items-center">
          <a href="http://www.gsxt.gov.cn/" target="_blank">统一社会信用代码92500111MAAC66FC9C</a>
        </span>
        <span class="info flex items-center">
          <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备16011563号-1</a>
        </span>
        <span class="info flex items-center">
          <eend-simple-card text="Powered And Designed By 极束科技"/>
        </span>
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
