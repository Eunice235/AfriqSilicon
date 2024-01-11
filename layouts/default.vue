<script setup>
import NkFooter from "~/components/NkFooter.vue";
import Navigation from "~/components/Navigation.vue";

useHead({
  title: 'Afriq Silicon | Elegant Software'
})



</script>

<template>
  <main ref="main" class="overflow-x-visible scroll-smooth">
    <client-only>
      <Navigation />
    </client-only>
    <slot />
  </main>

  <NkFooter />
</template>

<style scoped>
main{
  --gradient-red-silicon: linear-gradient(90deg, #F6D58C 0%, #FFB58B 31%, #FF4141 97%, #FF5353 100%)
}

html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

</style>
