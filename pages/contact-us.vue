<script setup lang="ts">
import {NIcon} from "naive-ui"
</script>

<template>
<section class="py-20 grid grid-cols-2 border-y-2 border-gray-600/40 mb-20 gap-5">
  <div class="col-span-1 flex flex-col space-y-4">
    <label for="conatct" class="glass-card p-2 text-xs w-fit">Contact Us</label>
    <h1 class="text-4xl font-hellix">Reach out any time</h1>
    <p class="font-sans text-slate-300">
      Thank you for considering Afriq Silicon for your software needs. Our dedicated team is ready to assist you in turning your ideas into reality. Reach out to us for a consultation, quotes, or any inquiries you may have. We look forward to the opportunity to collaborate and deliver exceptional software solutions tailored to your business.
    </p>
    <div class="flex flex-row space-x-10">
      <NIcon size="44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3c.1-447.8.2-671.7.3-671.7c447.8.1 671.7.2 671.7.3c-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98c60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9c-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" fill="currentColor"></path></svg>
      </NIcon>

      <NIcon size="44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8c-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z" fill="currentColor"></path></svg>
      </NIcon>
      <NIcon size="44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z" fill="currentColor"></path></svg>
      </NIcon>

    </div>

    <div class="mt-20">
      <address class="flex flex-col items-start">
        <h3 class="text-lg font-semibold mb-1">Afriq Silicon</h3>
        <p class="mb-1">123 Main Street, Apt. 4B</p>
        <p class="mb-1">Nairobi, KE 90210</p>
        <p>
          <a href="mailto:info@afriqsilicon.com" class="text-sky-300 hover:underline">info@afriqsilicon.com</a>
        </p>
        <p>
          <a href="tel:+15551234567" class="text-sky-300 hover:underline">+1 (555) 123-4567</a>
        </p>
      </address>

    </div>
  </div>
  <div class="col-span-1">
    <div class="p-1 rounded">
      <iframe width="600" height="700"
              class="rounded"
              src="https://www.portal.afriqsilicon.com/forms/wtl/c6581093f31b5282aa1774fad338895b"
              frameborder="0"
              sandbox="allow-top-navigation allow-forms allow-same-origin allow-popups"
              allowfullscreen></iframe>
    </div>


  </div>
</section>

  <Cta />
</template>

<style scoped>

</style>