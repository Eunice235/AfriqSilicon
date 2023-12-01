<template>
  <div class="relative" :style="`filter: drop-shadow(8px 8px 16px ${props.shadow});`">
      <span class="absolute grow-0 shrink-0 rounded-full -translate-x-1 -translate-y-1 icon-holder-bg" :class="size" :style="`background: linear-gradient(180deg, ${props.gradientStops.start} 0%, ${props.gradientStops.stop} 100%);`" />
      <span class="-translate-x-3 translate-y-1 absolute grid place-content-center grow-0 shrink-0 rounded-full glass-icon-holder text-black" :class="size">
        <slot>K</slot>
      </span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  gradientStops:{type:Object, default:{start:'#EC7D43', stop:'#C05D2A'}},
  shadow:{type:String, default: '#EC7D4380'},
  size:{type:String, default: 'h-20 w-20'}
})
</script>

<style scoped>
  .glass-icon-holder{
   background: rgba(255, 255, 255, 0.40);
    box-shadow: 0px 0px 4px 0px #FFF inset, 0px 4px 8px 0px #FFF inset;
    backdrop-filter: blur(2px);
  }
  .icon-holder-bg{
      box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.80) inset;
  }
</style>
