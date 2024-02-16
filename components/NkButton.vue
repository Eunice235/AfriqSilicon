<script lang="ts" setup>
defineProps({
  to:{type:String, default:''},
})
</script>

<template>
  <nuxt-link :href="to" class="border py-2.5 px-3 rounded-full border-white hover:text-black hover:border-transparent hover:bg-white transition-all duration-700 focus:ring-2 focus:ring-brand-rose/30 focus:ring-offset-1 focus:ring-offset-transparent">
    <slot></slot>
  </nuxt-link>
</template>

<style scoped lang="scss">
</style>
