<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {MenuRound, CloseRound} from '@vicons/material'
import {ref} from "vue";

let navs = [
    {name:'About Us', isPageLink: false, link:'#about-us', target:'_self' },
    {name:'Services', isPageLink: false, link:'#services', target:'_self'},
    {name:'Blog', isPageLink: false, link:'#', target:'_self', },
]
const showMobileMenu = ref(true)
const toggleMobile = () => {
  showMobileMenu.value = !showMobileMenu.value
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  console.log('target: ', targetElement)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", });
  }
}

</script>

<template>

<Popover>

  <nav class="flex justify-between items-center py-4 lg:py-8">
  <!--add blobs-->
  <div class="absolute z-[-1] w-[300px] h-[300px] bg-amber-500 rotate-45 -inset-20 rounded-full blur-2xl opacity-80"></div>
  <div class="absolute z-[-1] w-[250px] lg:w-[300px] h-[300px] bg-green-500 rotate-45 -top-20 inset-x-10 lg:inset-x-20 rounded-full blur-2xl opacity-40"></div>
  <div class="absolute z-[-1] w-[300px] h-[300px] bg-sky-500 rotate-45 -inset-4 rounded-full blur-2xl opacity-50"></div>

  <NuxtLink class="font-black tracking-wider" href="/">
    <img class="h-14 md:h-18 lg:h-20" src="~/assets/images/branding/logo.svg" alt="Afriq Silicon">
  </NuxtLink>
  <div class="hidden md:flex items-center space-x-12">
    <ul class="flex space-x-4 items-center">
      <li v-for="nav in navs">
          <NuxtLink v-if="nav.isPageLink" :href="nav.link" :class="[
            $route.path === nav.link ? 'custom-underline-active' : 'custom-underline'
            ] "
            class="transition-all text-lg">
            {{nav.name}}
          </NuxtLink>

          <NuxtLink @click="smoothScroll" :href="nav.link" v-else :class="[
            $route.path === nav.link ? 'custom-underline-active' : 'custom-underline'
            ] "
            class="transition-all text-lg">
            {{nav.name}}
          </NuxtLink>

      </li>
    </ul>

    <div class="flex space-x-2">
      <a href="https://www.portal.afriqsilicon.com/" target="_blank" class="py-2 px-4 rounded-full hover:bg-white/30 focus:ring-1 focus:ring-white/20">Login</a>
      <a href="/contact-us" class="border py-2 px-3 rounded-full">Contact Us</a>
    </div>
  </div>
  <PopoverButton class="md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
      <span class="sr-only">Open menu</span>
      <MenuRound class="h-6 w-6" aria-hidden="true" />
    </PopoverButton>
</nav>


<transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-12 w-auto" src="~/assets/images/branding/logo-dark.svg" alt="Afriq Silicon" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span class="sr-only">Close menu</span>
                    <CloseRound class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <NuxtLink v-for="item in navs" :key="item.name" :href="item.link" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div class="ml-4 text-base font-medium text-gray-900">
                      --- {{ item.name }}
                    </div>
                  </NuxtLink>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <NuxtLink href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Partners </NuxtLink>
                <NuxtLink href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Company </NuxtLink>
              </div>
              <div class="mt-6">
                <NuxtLink href="/contact-us" class="w-full flex items-center justify-center silicon-gradient bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-purple-700 hover:to-orange-700"> Contact us </NuxtLink>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing client?
                  <NuxtLink href="https://www.portal.afriqsilicon.com/" target="_blank" class="text-gray-900"> Sign in </NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
</Popover>
</template>

<style scoped>

</style>