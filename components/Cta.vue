<script setup lang="ts">

</script>

<template>
  <section id="call to action" class="grid place-items-center py-32 relative">
      <div class="absolute cta-blob-1 left-0 top-32 opacity-50"></div>
      <div class="absolute cta-blob-2 -top-32 opacity-50"></div>
      <div class="absolute cta-blob-3 right-5 top-24 opacity-50"></div>

    <div class="relative text-center">
      <h4 class="font-hellix text-7xl font-light text-center">
        Let’s build amazing software. Together
      </h4>
      <CtaButton class="mt-14">Free Consultation</CtaButton>
    </div>
  </section>
</template>

<style scoped>
.cta-blob-1{
  width: 29.12194rem;
  height: 24.51181rem;
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #F3BD78;
  mix-blend-mode: lighten;
  filter: blur(75px);
}
.cta-blob-2{
  width: 43.17019rem;
  height: 36.30619rem;
  flex-shrink: 0;
  border-radius: 43.17019rem;
  background: #9D7BE7;
  mix-blend-mode: lighten;
  filter: blur(75px);
}
.cta-blob-3{
  width: 29.12194rem;
  height: 24.51181rem;
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #EC7D43;
  mix-blend-mode: lighten;
  filter: blur(75px);
}
</style>