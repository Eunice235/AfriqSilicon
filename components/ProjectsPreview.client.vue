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
        "category": "Fintech",
        "title": "SmartWallet",
        "description": "An advanced mobile application offering secure, user-friendly digital wallet services with integrated cryptocurrency support.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Mobile App", "Cryptocurrency", "Digital Wallet"]
    },
    {
        "category": "E-commerce",
        "title": "ShopStream",
        "description": "A revolutionary e-commerce platform integrating live streaming to offer an interactive shopping experience.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["E-commerce", "Live Streaming", "Online Shopping"]
    },
    {
        "category": "Shipping",
        "title": "FleetTracker",
        "description": "A comprehensive fleet management solution with real-time tracking and logistics optimization for shipping companies.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Fleet Management", "Real-Time Tracking", "Logistics"]
    },
    {
        "category": "Tourism",
        "title": "TravelBuddy",
        "description": "An interactive mobile app that provides personalized travel itineraries and recommendations for tourists.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Travel", "Itinerary Planning", "Mobile App"]
    },
    {
        "category": "Pharmaceutical",
        "title": "MediTrack",
        "description": "An innovative platform for tracking and managing pharmaceutical inventories with AI-driven predictions.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Inventory Management", "AI", "Pharmaceutical"]
    },
    {
        "category": "Fintech",
        "title": "InvestorPro",
        "description": "A cutting-edge investment platform with machine learning algorithms for personalized portfolio management.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Investment", "Machine Learning", "Portfolio Management"]
    },
    {
        "category": "E-commerce",
        "title": "FashionFiesta",
        "description": "An online fashion marketplace with an AI-powered virtual fitting room for an enhanced shopping experience.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Fashion", "AI", "Virtual Fitting Room"]
    },
    {
        "category": "Shipping",
        "title": "PortOptimizer",
        "description": "A port management system using IoT sensors for efficient cargo handling and vessel coordination.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Port Management", "IoT", "Cargo Handling"]
    },
    {
        "category": "Tourism",
        "title": "CulturalConnect",
        "description": "An app connecting travelers with local cultural experiences, including guides, events, and workshops.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Cultural Experience", "Local Guides", "Travel App"]
    },
    {
        "category": "Pharmaceutical",
        "title": "HealthHub",
        "description": "A platform for healthcare professionals to manage patient records, drug information, and treatment plans.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Patient Records", "Drug Information", "Healthcare"]
    },
    {
        "category": "Fintech",
        "title": "LoanWizard",
        "description": "A digital platform for streamlined loan processing and approval using AI-based credit scoring.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Loan Processing", "AI", "Credit Scoring"]
    },
    {
        "category": "E-commerce",
        "title": "GadgetGalore",
        "description": "An online electronics store with a virtual assistant to help customers make informed purchasing decisions.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Electronics", "Virtual Assistant", "Online Store"]
    },
    {
        "category": "Shipping",
        "title": "EcoShip",
        "description": "A green shipping solution that focuses on reducing environmental impact through eco-friendly practices.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Eco-Friendly", "Sustainability", "Green Shipping"]
    },
    {
        "category": "Tourism",
        "title": "HeritageTrails",
        "description": "An augmented reality app to explore historical sites, offering immersive tours and information.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Augmented Reality", "Heritage", "Tourism"]
    },
    {
        "category": "Pharmaceutical",
        "title": "LabAnalytix",
        "description": "An advanced data analytics platform for pharmaceutical research, streamlining drug development processes.",
        "image": "https://example.com/image.png",
        "company_logo": "https://example.com/logo.svg",
        "tags": ["Data Analytics", "Pharmaceutical Research", "Drug Development"]
    }
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
  <h2 class="">
    Projects We've Worked On
  </h2>
  <p class="text-lg mt-6">We have enjoyed working on a variety on software solutions. In the process, we have refined our approach and skillset to the best.</p>

  <TabGroup as="div" class="mt-8" @change="($event) => selectedTab = $event">
      <TabList class="flex space-x-4 transition-all duration-700 overflow-x-auto">
        <Tab v-for="category in categories" class="focus:outline-0" v-slot="{ selected }">
          <button
              :class="[
                  selected ? 'glass-card-light' : ''
              ]"
              class="p-1 font-semibold whitespace-nowrap">{{category.name}}</button>
        </Tab>
      </TabList>
    <TabPanels>
      <template v-for="category in categories">
        <TabPanel>

          <TabGroup as="div" class="hidden lg:grid grid-cols-12 gap-8 mt-8" @change="($event) => selectedProjectTab = $event">
            <TabList as="div" class="col-span-4 flex flex-col space-y-2">
              <Tab v-for="project in category_projects" class="focus:outline-0" v-slot="{selected}">
                <div
                    :class="[
                        selected ? 'glass-card' : 'border-transparent'
                    ]"
                    class="text-left p-2 border border-1 transition-all">
                  <h4 class="font-semibold text-[16px]">{{project.title}}</h4>
                  <p class="text-sm text-slate-400 mt-1">{{project.description.slice(0,80)}}</p>
                  <div class="bg-slate-200/30 w-fit px-2 py-1 text-xs mt-4 rounded-full">
                    <span>November, 2021 - January, 2022</span>
                  </div>
                </div>
              </Tab>
            </TabList>
            <TabPanels as="div" class="col-span-8 place-items-center">
              <template :key="i" v-for="i in category_projects">
                <TabPanel>
                  <div>
                    <div class="h-[400px] w-3/4 bg-red-400 bg-cover bg-right-top border border-1 rounded border-slate-200 relative"
                         :style="`background-image: url(${'/images/projectx.png'})`">
                      <div class="absolute flex justify-between bottom-0 bg-gradient-to-b from-transparent to-black px-4 pt-16 h-[40%]">
                        <div class="">
                          <h5 class="font-semibold font-hellix text-lg">{{ category_projects[selectedProjectTab].title }}</h5>
                          <p class="text-slate-200 text-sm pr-12">{{ category_projects[selectedProjectTab].description }}</p>
                        </div>
                        <span class="whitespace-nowrap">LOGO HERE</span>
                      </div>
                    </div>

                    <div class="mt-4 flex">
                      <span
                          class="bg-white/20 p-2 rounded-full mr-2 text-xs"
                          v-for="tag in category_projects[selectedProjectTab].tags">
                        {{tag}}
                      </span>
                    </div>

                  </div>
                </TabPanel>
              </template>
            </TabPanels>
          </TabGroup>

          <div class="lg:hidden mt-8 flex flex-col space-y-2">
            <div class="flex flex-row items-start space-x-2" v-for="project in category_projects">
              <div class="w-[100px] h-[100px] bg-red-400"></div>
              <div>
                <h4 class="font-semibold text-[16px]">{{project.title}}</h4>
                <p class="text-sm text-slate-400 mt-1">{{project.description.slice(0,80)}}</p>
                <div class="bg-slate-200/30 w-fit px-2 py-1 text-xs mt-4 rounded-full">
                  <span>November, 2021 - January, 2022</span>
                </div>
              </div>
            </div>
          </div>

        </TabPanel>
      </template>
    </TabPanels>
  </TabGroup>


</div>
</template>

<style scoped>

</style>