<script setup lang="ts">
import {NDrawer, NDrawerContent} from 'naive-ui'
import {ref} from "vue";

let navs = [
    {name:'About Us', link:'#', target:'_self' },
    {name:'Services', link:'#', target:'_self'},
    {name:'Contact Us', link:'#', target:'_self', },
    {name:'Blog', link:'#', target:'_self', },
]
const showMobileMenu = ref(true)
const toggleMobile = () => {
  showMobileMenu.value = !showMobileMenu.value
}

</script>

<template>
<nav class="flex justify-between items-center py-4 lg:py-8">
  <!--add blobs-->
  <div class="absolute z-[-1] w-[300px] h-[300px] bg-amber-500 rotate-45 -inset-20 rounded-full blur-2xl opacity-80"></div>
  <div class="absolute z-[-1] w-[250px] lg:w-[300px] h-[300px] bg-green-500 rotate-45 -top-20 inset-x-10 lg:inset-x-20 rounded-full blur-2xl opacity-40"></div>
  <div class="absolute z-[-1] w-[300px] h-[300px] bg-sky-500 rotate-45 -inset-4 rounded-full blur-2xl opacity-50"></div>

  <NuxtLink class="font-black tracking-wider" href="/">
    <img class="h-14 md:h-20" src="~/assets/images/branding/logo.svg">
  </NuxtLink>
  <div class="hidden md:flex items-center space-x-12">
    <ul class="flex space-x-4 items-center">
      <li v-for="nav in navs">
        <NuxtLink :href="nav.link" :class="[
          $route.path === nav.link ? 'custom-underline-active' : 'custom-underline'
          ] "
          class="transition-all text-lg">
          {{nav.name}}
        </NuxtLink>
      </li>
    </ul>

    <div class="flex space-x-2">
      <button class="py-2 px-4 rounded-full hover:bg-white/30 focus:ring-1 focus:ring-white/20">Login</button>
      <button class="border py-2 px-3 rounded-full">Contact Us</button>
    </div>
  </div>
  <button @click="toggleMobile" class="flex md:hidden flex-col space-y-1 hover:bg-slate-300 focus:bg-slate-300/30 p-2 h-8 w-8 justify-center items-center rounded-full transition-all">
    <span class="transition-all h-0.5 w-6 bg-white rounded-full"></span>
    <span class="transition-all h-0.5 w-6 bg-white rounded-full"></span>
    <span class="transition-all h-0.5 w-6 bg-white rounded-full"></span>
  </button>
</nav>

<n-drawer
    v-model:show="showMobileMenu"
    :width="300"
    placement="left"
    show-mask="transparent"
    drawer-class="fixed bg-black border-r-2 border-slate-400 text-white"
>
  <n-drawer-content title="Navigate" closable>
    <div class="flex flex-col divider-y divide-amber-300 items-center">
      <ul class="flex flex-col space-y-2">
        <li v-for="nav in navs">
          <NuxtLink :href="nav.link" :class="[
            $route.path === nav.link ? 'custom-underline-active' : 'custom-underline'
            ] "
            class="transition-all text-lg">
            {{nav.name}}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex space-x-2">
        <button class="py-2 px-4 rounded-full hover:bg-white/30 focus:ring-1 focus:ring-white/20">Login</button>
        <button class="border py-2 px-3 rounded-full">Contact Us</button>
      </div>
    </div>
  </n-drawer-content>
</n-drawer>
</template>

<style scoped>

</style>