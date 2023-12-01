<script setup>
const main = ref(null)
//watch(main, ()=>{
//  console.log('Main found', main.value)
  //main.value.addEventListener('mousemove', function(e) {
  //    //const x = e.clientX - e.target.offsetLeft;
  //    //const y = e.clientY - e.target.offsetTop;
  //    //const backgroundStyle = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 10%, transparent 70%)`;
  //    //main.value.style.backgroundImage = backgroundStyle;
  //});
//})
</script>

<template>
  <main ref="main" class="overflow-x-visible">
    <nav class="flex justify-between py-8">
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
        <span class="mr-4 font-bold bg-clip-text text-transparent bg-gradient-to-br bg-gradient-[90deg] from-[#F6D58C]/30 via-[#FFB58B]/30 to-[#FF5353]">Empowering</span>
        <span class="font-thin">Innovation Through Software Excellence</span>
      </h1>
      <h2 class="text-4xl mt-20 font-normal">
        We turning visionary ideas into digital reality, Nkai Silicon empowers businesses with tailored software solutions for unparalleled success.
      </h2>

      <div class="flex space-x-4 mt-12 justify-center">
        <CtaButton>Let's Talk</CtaButton>
        <button class="mesh-gradient-border py-2 px-3 rounded-full relative overflow-hidden">
          <span class="relative z-10">Contact Us</span>
        </button>

      </div>

      <!--decorate-->
      <div class="absolute z-[-1] w-[500px] h-[300px] bg-cyan-500 rotate-45 -bottom-32 -right-32 rounded-full blur-2xl opacity-50"></div>
      <div class="absolute z-[-1] w-[500px] h-[500px] bg-purple-500 rotate-45 -bottom-40 -right-56 rounded-full blur-2xl opacity-50"></div>
    </div>


    <section class="mt-32 grid grid-cols-12 gap-4">
      <div id="cards" class="col-span-4">
        <div class="glass-card relative flex space-y-12 p-4">

          <IconHolder size="h-12 w-12" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem, beatae commodi cupiditate dicta dolores ducimus esse, eveniet minus placeat quae ratione sapiente ullam vel! Enim recusandae repellendus sint!
          </p>
        </div>
      </div>
      <div class="col-span-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum facilis hic laborum natus non nostrum, numquam, perspiciatis quaerat quam quis quisquam, rerum voluptas? Enim officia, repellendus. Aperiam, omnis, vero!
      </div>
    </section>

    <slot />
  </main>
</template>

<style scoped>

</style>
