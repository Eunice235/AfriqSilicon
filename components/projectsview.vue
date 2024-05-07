<script setup>

import { ref, onMounted } from 'vue';

const scrollerLeft = ref(null);
//const scrollerRight = ref(null);



// Images array
const images = ['project 1', 'project 2', 'project 3', 'project 4', 'project 5','project 1', 'project 2', 'project 3', 'project 4', 'project 5'];

onMounted(() => {
  // Start the animations when component is mounted
  startAnimation(scrollerLeft.value, 15); // Speed factor for left animation
  //startAnimation(scrollerRight.value, 15); // Speed factor for right animation
});
function startAnimation(scrollerElement, speedFactor) {
  // Calculate total width of all images
  const totalWidth = images.length * 50; // 45 is the width of each image (w-45)

  // Create animation
  scrollerElement.style.animation = `scroll ${totalWidth / speedFactor}s linear infinite`; // Adjust the duration here

  /*Clone images to create infinite loop
  const clonedImages = images.map((image) => {
    return {
      src: `/images/projects/${image}.png`,
      alt: image
    };
  });*/

  // Clone images to create infinite loop
  const clonedImages = [...images, ...images]; // Duplicate the images array

  // Append cloned images to the end
  clonedImages.forEach((clonedImage) => {
    const img = document.createElement('img');
    img.src = clonedImage.src;
    img.alt = clonedImage.alt;
    img.className = 'h-45 w-50 mr-4 rounded-lg';
    scrollerElement.appendChild(img);
  });
}

</script>


<template>
<section>
  
  <div class="flex flex-col justify-center bg-gradient-to-r from-amber-200 to-amber-800 rounded-lg overflow-hidden my-20 lg:-mx-20">
    <!-- First row with images animated from right to left -->
    <div class="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap mt-4 mb-4" ref="scrollerLeft">
      <img v-for="image in images" :key="`left-${image}`" :src="`/images/projects/${image}.png`" :alt="image" class="h-45 w-50 mr-4 rounded-lg" />
    </div>
    <!-- Second row with images animated from left to right -->
    <!--<div class="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap mt-4 mb-4" ref="scrollerRight">
      <img v-for="image in images" :key="`right-${image}`" :src="`/images/projects/${image}.png`" :alt="image" class="h-40 w-45 mr-4 rounded-lg" />
    </div>-->
  


  <div class="flex flex-row justify-between items-center text-black m-8">
    <div class="flex flex-col justify-items-start">
      <h1 class="text-4xl font-bold text-slate-800 ">Project Case Studies</h1><br>
      <p class="text-lg text-slate-700">Join us on the forefront of technology and let's create something<br> extraordinary together.
         Explore our projects and discover how <br>we can help you  achieve your goals in the digital age.</p>
    </div>
    <div>
        <h3 class="text-2xl font-semibold">Read Client Series </h3>
        
    </div>
  </div>

  </div>
  
    
</section>
</template>

<style>
@keyframes scroll {
  from { transform: translateX(0); } 
  to { transform: translateX(-100%); } 
  
}

</style>