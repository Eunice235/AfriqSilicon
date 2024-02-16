<script setup lang="ts">
import {TabGroup, TabList, Tab, TabPanel, TabPanels} from "@headlessui/vue";

interface ProjectImage {name: string; file_url:string}
interface ProjectTag {name: string;}
interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: ProjectImage;
    company_logo: ProjectImage;
    date_range: string;
    more_images: ProjectImage[];
    tags: ProjectTag[];
}

const categories = ref([
  {name:'Fintech', key:'fintech'},
  {name:'E-commerce', key:'e-commerce'},
  {name:'Shipping', key:'shipping'},
  {name:'Tourism', key:'tourism'},
  {name:'Pharmaceutical', key:'pharmaceutical'},
])

const selectedTab = ref(0)
const processing = ref(true)
const selectedProjectTab = ref(0)

const projects = ref([
    {
        "category": "Healthcare",
        "title": "Well Led Care (UK)",
        "link": "https://wellledcareltd.co.uk/",
        "description": "We had the privilege of setting up Well Led Care from the start. We helped with branding, website setup and business orations streamline. Shortly after, our client got the attention of the government and won an amazing business opportunity",
        "image": "/images/projects/welled.png",
        "company_logo": "/images/projects/welled-logo.png",
        "tags": ["Website", "UI/UX Design"]
    },
    {
        "category": "NGO",
        "title": "Amazing Facts Africa (Uganda)",
        "link": "https://amazingfactsafrica.com/",
        "description": "Amazing Facts Africa is a sub organization of Amazing Facts international and they thrive in training missionaries and affecting the world with the pure Gospel, we had the chance to help them setup their content-heavy website in a way that they would enjoy managing it from the start",
        "image": "/images/projects/afa.png",
        "company_logo": "/images/projects/afa-logo.png",
        "tags": ["Website", "UI/UX Design"]
    },
    {
        "category": "NGO",
        "title": "Beth Rapha Cancer Foundation (Nairobi)",
        "link": "https://bethraphafoundation.org/",
        "description": "Beth Rapha if a cancer NGO in Nairobi, Kenya whose main focus is to provide accommodation to cancer patients traveling from very far to get treatments. The website and content management plaform we developed, helped them raise awareness and attach well wishers",
        "image": "/images/projects/brcf.png",
        "company_logo": "/images/projects/brcf-logo.png",
        "tags": ["Website", "UI/UX Design", "CMS"]
    },
    {
        "category": "Healthcare",
        "title": "NEFMS (Florida)",
        "link": "https://www.nefms.health/",
        "description": "North East Florida Medical Association is a membership organisation for doctors in Florida, US. They reached out for a transformation of their existing website and membership platform. It was a pleasure delivering an efficient and operational piece of software to them",
        "image": "/images/projects/nefms.png",
        "company_logo": "/images/projects/nefms-logo.png",
        "tags": ["Website", "UI/UX Design", "CMS", "Membership", "Payments"]
    },
    {
        "category": "School",
        "title": "Lofty Creek Christian School (Nairobi)",
        "link": "https://loftycreekchristianschool.sc.ke/",
        "description": "Lofty Creek started as vision for providing modern and wholesome education for children, and we were there when they scratched the ground. We developed the school themes and brand guidelines, website and S.M.S for their back office.",
        "image": "/images/projects/lofty.png",
        "company_logo": "/images/projects/lofty-logo.png",
        "tags": ["Website", "UI/UX Design", "CMS", "School", "Back-office"]
    },

])

const category_projects = computed(() => {
  return projects.value.length ?
      projects.value.filter((project) => project.category.toLowerCase() === categories.value[selectedTab.value].key)
      : []
})
onMounted(() => {
  // $fetch('/api/projects')
  //     .then((data) => {
  //       console.log('>>>>>> projects fetched >>>>>', data)
  //       projects.value = data
  //     })
  //     .catch((error) => {
  //       console.log('>>>>>> projects error >>>>>', error)
  //     })
  //     .finally(() => processing.value = false)
})

</script>

<template>
<div>
  <h2>
    Projects We've Worked On
  </h2>
  <p class="text-lg mt-6 text-slate-400 w-1/2">We have enjoyed working on a variety on software solutions. In the process, we have refined our approach and skillset to the best.</p>

  <n-carousel show-arrow class="pb-10 lg:py-0 lg:h-[60vh] rounded mt-4 relative ring-1 ring-slate-700 ring-offset-1 ring-offset-transparent">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4" v-for="project in projects">
      <div class="col-span-8 bg-red-500">
          <img
            class="object-fill w-full"
            :src="project.image"
            :alt="project.title"
          >
      </div>
      <div class="col-span-4 p-4">
        <nuxt-link target="_blank" :href="project.link" class="text-xl text-slate-200 font-bold hover:underline">{{project.title}}</nuxt-link>
        <p class="mt-2 text-slate-400 text-lg">
          {{project.description}}
        </p>

        <div class="grid grid-cols-3 gap-1 items-center mt-4">
          <span  v-for="item in project.tags" class="inline-flex bg-slate-100/40 text-gray-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{ item }}</span>
        </div>
      </div>
    </div>

    <template #arrow="{ prev, next }">
      <div class="flex absolute bottom-4 right-8 space-x-2">
        <button type="button" class="transition-all duration-500 bg-white/20 hover:bg-white/40 rounded flex justify-center items-center h-8 p-2 w-8" @click="prev">
          <naive-icon :size="24" class="bg-transparent text-slate-400" name="ph:arrow-left" />
        </button>
        <button type="button" class="transition-all duration-500 bg-white/20 hover:bg-white/40 rounded flex justify-center items-center h-8 p-2 w-8" @click="next">
          <naive-icon :size="24" class="bg-transparent text-slate-400" name="ph:arrow-right" />
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>

</div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}
.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
