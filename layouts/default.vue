<script setup lang="ts"></script>

<template>
  <main>
    <nav class="flex justify-between py-8 z-50">
      <!--add blobs-->
      <div class="absolute z-[-1] w-[300px] h-[300px] bg-amber-500 rotate-45 -inset-20 rounded-full blur-2xl opacity-80"></div>
      <div class="absolute z-[-1] w-[300px] h-[300px] bg-green-500 rotate-45 -top-20 inset-x-20 rounded-full blur-2xl opacity-40"></div>
      <div class="absolute z-[-1] w-[300px] h-[300px] bg-sky-500 rotate-45 -inset-4 rounded-full blur-2xl opacity-50"></div>

      <NuxtLink class="font-black text-xl tracking-wider" href="/">
        <img class="h-20" src="~/assets/images/branding/logo.svg">
      </NuxtLink>
      <div class="flex items-center space-x-12">
        <ul class="flex space-x-4 items-center">
          <li v-for="i in 5"><NuxtLink class="hover:underline">Link {{i}}</NuxtLink></li>
        </ul>

        <button class="border py-2 px-3 rounded-full">Contact Us</button>
      </div>
    </nav>

    <div id="hero" class="max-w-4xl h-[70vh] mx-auto grid place-content-center text-center">
      <h1 class="text-7xl font-display">
        <span class="mr-4 font-bold">Empowering</span>
        <span class="font-thin">Innovation Through Software Excellence</span>
      </h1>
      <h2 class="text-4xl mt-20 font-normal">
        We turning visionary ideas into digital reality, Nkai Silicon empowers businesses with tailored software solutions for unparalleled success.
      </h2>

      <div class="flex space-x-4 mt-12 justify-center">
        <button>lkjhgfc</button>
        <button>87654678</button>
      </div>

      <!--decorate-->
      <div class="absolute z-[-1] w-[500px] h-[300px] bg-cyan-500 rotate-45 -bottom-32 -right-32 rounded-full blur-2xl opacity-50"></div>
      <div class="absolute z-[-1] w-[500px] h-[500px] bg-purple-500 rotate-45 -bottom-40 -right-56 rounded-full blur-2xl opacity-50"></div>
    </div>

    <slot />
  </main>
</template>

<style scoped>

</style>
