<script setup lang="ts">

</script>

<template>
  <section id="call to action" class="grid place-items-center py-20 md:py-32 relative">
      <div class="h-[12.51181rem] md:h-[24.51181rem] w-[14.12194rem] md:w-[29.12194rem] absolute cta-blob-1 left-0 top-32 opacity-50"></div>
      <div class="h-[16.30619rem] md:h-[36.30619rem] w-[18.17019rem] md:w-[43.17019rem] absolute cta-blob-2 top-1.5 md:-top-32 opacity-60"></div>
      <div class="h-[14.51181rem] md:h-[24.51181rem] w-[10.12194rem] md:w-[29.12194rem] absolute cta-blob-3 right-10 top-14 md:top-24 opacity-50"></div>

    <div class="relative text-center">
      <h4 class="font-hellix text-4xl md:text-4xl lg:text-7xl font-light text-center">
        Let’s build amazing software. <span class="font-bold">Together</span>
      </h4>
      <nuxt-link href="/contact-us">
      <CtaButton class="mt-14">Free Consultation</CtaButton>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.cta-blob-1{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #F3BD78;
  mix-blend-mode: lighten;
  filter: blur(75px);
  animation: 3s 1s alternate infinite random_motion;
}
.cta-blob-2{
  flex-shrink: 0;
  border-radius: 43.17019rem;
  background: #9D7BE7;
  mix-blend-mode: lighten;
  filter: blur(75px);
  animation: 3s 1s alternate infinite random_motion;
  animation-delay: 1.4s;
}
.cta-blob-3{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #EC7D43;
  mix-blend-mode: lighten;
  filter: blur(75px);
  animation: 3s 1s alternate infinite random_motion;
  animation-delay: 1.8s;
}

.cta-blob-1, .cta-blob-2,
.cta-blob-3{
  animation-duration: 10000ms;
  animation-timing-function: ease-in;
}

@keyframes random_motion {
  0%,100%{
    transform: translate3d(0,6em,0);
    opacity: 0.5
  }
  50%{
    transform: translate3d(0,-6em,0);
    opacity: 1
  }
}
</style>
