<template>
  <div class="banner w-full xl:min-w-1300 h-banner mt-24 mb-28 bg-gray-300 relative overflow-hidden">
    <div class="banner-content-container xl:eend-container max-md:w-full h-banner flex items-center max-md:justify-center">
      <div class="banner-content z-1">
        <div class="banner-title banner-font text-7xl text-gray-800">极束网络科技工作室</div>
        <div class="pt-14 pb-14 banner-font text-4xl text-gray-700">开放、合作、共赢</div>
        <div class="pt-3 pb-14 text-4xl text-gray-600">我司已和U班通团队达成合作关系，共同致力于推动互联网+数字化校园建设！</div>
        <div class="banner-button-group flex items-center">
          <a-button type="primary" size="large" @click="dialogVisible = true">合作声明</a-button>
          <a-button class="ml-10" size="large">加入我们</a-button>
        </div>
      </div>
    </div>
  </div>


  <a-modal v-model:visible="dialogVisible" title="合作声明">
    <a-typography>
      <p>我们非常荣幸地宣布，u班通团队与极束科技已正式达成技术合作协议，双方将共同开展运营及推广活动，以进一步提升我们的技术实力和服务水平，为用户和合作伙伴提供更加优质、高效的产品和服务。</p>
      <br>
      <p>u班通团队一直以来致力于教育科技领域的创新与发展，拥有丰富的教学资源和先进的技术实力。极束科技作为一家专注于人工智能和大数据技术的领先企业，在技术研发和应用方面取得了显著成果。此次合作将充分发挥双方的优势，共同推动教育科技的进步与发展。</p>
      <br>
      <p>根据合作协议，双方将共同开展以下运营及推广活动：</p>
      <p><a-typography-text bold>技术资源整合与共享</a-typography-text>：u班通团队与极束科技将共同整合各自的技术资源，实现资源共享，以推动双方在教育科技领域的深入合作。通过技术资源的互补与融合，我们将打造更加先进、高效的教育科技产品，为用户提供更加优质的学习体验。</p>
      <p><a-typography-text bold>技术合作</a-typography-text>：双方将共同开展市场推广活动，提升品牌知名度和影响力。我们将充分利用各自的渠道资源，进行线上线下宣传，吸引更多的用户关注和使用我们的产品。同时，双方还将加强品牌合作，共同打造教育科技领域的知名品牌。</p>
      <p><a-typography-text bold>运营支持与服务提升</a-typography-text> ：u班通团队与极束科技将共同提供运营支持，确保产品的稳定运行和持续优化。我们将建立完善的客户服务体系，提供及时、专业的技术支持和售后服务，确保用户能够享受到高质量的产品和服务。</p>
      <br>
      <a-typography-text bold>合作意向</a-typography-text>
      <p>1. 在产品方面，我司希望与贵公司进行产品合作，共同开发和推广优质产品。</p>
      <p>2. 在技术方面，我司希望与贵公司共同研发新技术，提升产品的竞争力和市场占有率。</p>
      <p>3. 在营销方面，我司希望与贵公司共同探讨市场营销策略，共同开拓市场，实现双方的共同利益。</p>
    </a-typography>
  </a-modal>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  const dialogVisible = ref(false)
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
