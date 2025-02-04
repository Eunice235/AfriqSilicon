<script setup>

import { ref, onMounted } from 'vue';

const scrollerRight = ref(null);

const testimonials = [
    { description : 'Afriq silicon provided us with exceptional software development services. Their team was responsive, professional, and delivered high-quality results within our tight deadline!',
      icon :'startik', image : 'testm1', Title : 'freelancer designer ', nm : 'sarah gibson'},
    {description : ' I was impressed by the seamless infrastructure architecture and orchestration services provided by Digital Innovations Co. They transformed our IT environment, improving performance and security!',
      icon :'star3', image : 'testim3', Title : 'CEO of zink Enterprises', nm : 'John Smith, '},
    {description : 'Ive been using this web hosting service for over a year and Im really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!',
      icon :'star2em', image : 'testim4', Title : 'CTO of state Corporation', nm : 'Emily Johnson,'},
    {description : 'Afriq siliocn rescued our project from a critical situation with their project rescuing and bug fixing services. Their team quickly identified and resolved issues, ensuring our software functioned flawlessly.',
     icon :'startik', image : 'testim2', Title : 'Director DEFF Tech', nm : 'David Williams, '},
    {description : 'The Team as a Service model offered by afriq silicon. was a game-changer for our project. Their agile and dedicated professionals seamlessly integrated with our team, contributing to our success',
     icon :'star3', image : 'testm1', Title : 'Project Manager norkun', nm : 'Sarah Thompson,'},
     {description : 'Afriq silicon provided strategic consultancy that guided our digital transformation journey. Their insights and expertise helped us stay ahead in the competitive market',
     icon :'star2em', image : 'testm1', Title : 'IT Manager at aff', nm : 'Alex Clark'},
    {description : 'delivered exceptional results, hosting our systems on their servers. Their reliable hosting services ensured uptime and performance, allowing us to focus on our core business',
     icon :'startik', image : 'testm1', Title : 'Operations Manager at STU', nm : 'Daniel Lee,'},
     { description : 'Afriq silicon provided us with exceptional software development services. Their team was responsive, professional, and delivered high-quality results within our tight deadline!',
      icon :'startik', image : 'testm1', Title : 'freelancer designer ', nm : 'sarah gibson'},
    {description : ' I was impressed by the seamless infrastructure architecture and orchestration services provided by Digital Innovations Co. They transformed our IT environment, improving performance and security!',
      icon :'star3', image : 'testim3', Title : 'CEO of zink Enterprises', nm : 'John Smith, '},
    {description : 'Ive been using this web hosting service for over a year and Im really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!',
      icon :'star2em', image : 'testim4', Title : 'CTO of state Corporation', nm : 'Emily Johnson,'},
    {description : 'Afriq siliocn rescued our project from a critical situation with their project rescuing and bug fixing services. Their team quickly identified and resolved issues, ensuring our software functioned flawlessly.',
     icon :'startik', image : 'testim2', Title : 'Director DEFF Tech', nm : 'David Williams, '},
    {description : 'The Team as a Service model offered by afriq silicon. was a game-changer for our project. Their agile and dedicated professionals seamlessly integrated with our team, contributing to our success',
     icon :'star3', image : 'testm1', Title : 'Project Manager norkun', nm : 'Sarah Thompson,'},
]

// Function to duplicate testimonials
const duplicateTestimonials = [...testimonials, ...testimonials];


// Function to scroll the testimonials container to the left
const scrollLeft = () => {
    const container = scrollerRight.value;
    if (container) {
        container.scrollBy({ left: -100, behavior: 'smooth' }); 
    }
};

// Function to scroll the testimonials container to the right
const scrollRight = () => {
    const container = scrollerRight.value;
    if (container) {
        container.scrollBy({ left: 100, behavior: 'smooth' }); 
    }
};


//onMounted(() => {
  // Start the animation when component is mounted
  //startAnimation(scrollerRight.value, 10); // Speed factor for right animation
//});

//function startAnimation(scrollerElement, speedFactor) {
  // Calculate total width of all testimonials
  //const totalWidth = testimonials.length * 200 * 2; 

  // Create animation and can adjust the duration
 //'' scrollerElement.style.animation = `scroll-right ${totalWidth / speedFactor}s linear infinite`; 
//}


const faq = [
  { text: 'How secure is your platform against cyber threats?', answer: 'Our platform employs state-of-the-art security measures, including encryption, firewalls, and regular security audits, to ensure robust protection against cyber threats. We adhere to industry best practices and comply with stringent security standards to safeguard user data and maintain the integrity of our systems.' },
  { text: 'Can your software integrate with existing systems and third-party applications?', answer: 'Yes, our software is designed with flexibility and interoperability in mind. We provide comprehensive APIs and integration capabilities that enable seamless connectivity with a wide range of existing systems and third-party applications. Whether it is ERP systems, CRM software, or cloud services, our solutions can easily integrate to streamline workflows and enhance productivity.' },
  { text: 'What level of technical support do you offer to your customers?', answer: 'We pride ourselves on delivering exceptional technical support to our customers. Our dedicated support team is available round-the-clock to address any inquiries, troubleshoot issues, and provide timely assistance. Whether it is via email, phone, or live chat, our support staff is committed to ensuring a smooth and satisfactory experience for all users.' },
  { text: 'How scalable is your infrastructure to accommodate business growth?', answer: 'Our infrastructure is highly scalable and designed to scale seamlessly with the evolving needs of our clients. Whether you are a startup experiencing rapid growth or an established enterprise expanding your operations, our cloud-based architecture and elastic resources allow for effortless scalability without compromising performance or reliability.' },
  { text: 'What measures do you take to ensure data privacy and compliance with regulations?', answer: 'Protecting the privacy and confidentiality of user data is our top priority. We adhere to strict data protection regulations such as GDPR and HIPAA and implement robust privacy measures throughout our systems and processes. ' }
];





// Array of boolean values to track answer visibility for each question
const isOpen = ref(Array(faq.length).fill(false));

// Method to toggle answer visibility for a specific question
const toggleAnswer = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};

// Computed property to format the index
const formattedIndex = (index) => {
  return (index + 1).toString().padStart(2, '0');
};




const hero = [
    {icon:`icon1`, title:'Discover Our Expertise in Crafting Tailored Applications', description:'Our Application Development Services encompass the end-to-end process of creating software solutions customized to your unique needs. From conceptualization to deployment, we transform ideas into functional, user-friendly applications that drive your business forward', link:'#'},
    {icon:'ops', title:'Infrastructure Architecture and Orchestration', description:'We empower your organization with robust, scalable, and seamlessly orchestrated IT environments. We design and implement the backbone of your technology infrastructure to ensure optimal performance, security, and adaptability.', link:'#'},
    {icon:'ux', title:'Elevating User Experiences to the Extraordinary', description:'At Afriq Silicon, we are committed to crafting exceptional UI/UX designs that captivate, engage, and delight users. Our design experts combine aesthetics with usability to create digital experiences that leave a lasting impression.', link:'#'},
    {icon:'restore', title:'Restoring Projects to Success', description:'We rescue your projects from setbacks with our dedicated Project Rescuing and Bug Fixing services. Our expert team swiftly identifies and resolves issues, ensuring your software functions flawlessly, on time and within budget.', link:'#'},
    {icon:'taas', title:'Unlock the Power of Team as a Service', description:'Discover the flexibility and expertise of our Team as a Service. Our agile, dedicated professionals seamlessly integrate with your projects, offering a dynamic extension to your team for unparalleled success.', link:'#'},
    {icon:'consultancy', title:'Strategic Consultancy for Digital Transformation', description:'Elevate your business with our consultancy services. We offer strategic insights and expertise to drive your digital transformation journey, ensuring a competitive edge in the ever-evolving landscape.', link:'#'},

]




</script>

<template>
    <!--add blobs-->
    <div class="flex flex-row justify-between  items-center mb-16 mt-4 pr-4 pl-4">
        <div class="flex flex-col justify-">
            <div class="flex flex-col justify-center">
                <h1 class="font-semibold text-slate-200 text-6xl mb-6 ">OUR OFFERINGS</h1>
                <p class="text-slate-300 text-xl">Elevate Your Business With Our Tailored Solutions,<br> Delivering Unmatched Quality,
                     Innovation,<br> And Efficiency To Drive Tangible Results.</p>
            </div>
            <div class="flex flex-row mb-6">
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Fedx.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Dhl.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Ebay.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/ember.svg" alt="Afriq Silicon" />
            </div>
            <div class="flex flex-row  justify-start space-x-4 items-center">
              <nuxt-link href="/contact-us">
                <CtaButton>Schedule a Session</CtaButton>
              </nuxt-link>
                <h3></h3>
            </div>
        </div>
        
        <div class="flex ">
            <div class="h-[4rem] md:h-[8rem] w-[5rem] md:w-[10rem] absolute service-blob-1 left-4 opacity-50"></div>
            <div class="h-[5rem] md:h-[10rem] w-[6rem] md:w-[12.5rem] absolute service-blob-2 left4  opacity-60"></div>
            <div class="h-[4rem] md:h-[8rem] w-[4rem] md:w-[10rem] absolute service-blob-3 left4  opacity-50"></div>

            <img class="h-80 w-auto" src="~/assets/images/branding/OBJECT.svg" alt="Afriq Silicon" />
        </div>
    </div>



    <div class="flex flex-col mb-8   shadow-gray-500  ">
        <div class="flex align-start flex-col">
            <h1 class="font-semibold text-slate-200  text-4xl " >SERVICES</h1>
            <p class="text-lg text-slate-300">View a Breakdown of Our Services</p>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-12 gap-3 mt-8 mb-16 ">
            <div class="h-[4rem] md:h-[8rem] w-[5rem] md:w-[10rem] absolute service-blob-1 left-4 opacity-50"></div>
            <div class="h-[5rem] md:h-[10rem] w-[6rem] md:w-[12.5rem] absolute service-blob-2 left4  opacity-60"></div>
            <div class="h-[4rem] md:h-[8rem] w-[4rem] md:w-[10rem] absolute service-blob-3 left4  opacity-50"></div>
          <div class="col-span-4" v-for="item in hero">
            
            <img class="h-8 md:h-24" :src="`/images/custom-icons/${item.icon}.svg`" :alt="item.title">
            <h3 class="mt-2 font-semibold text-xl text-slate-200 ">{{item.title}}</h3>
            <p class="mt-2 text-slate-300 text-sm font-regular">
              {{item.description}}
            </p>
            
        </div>
        <div class="flex justify-end items-end mr-48">
            <div class="h-[4rem] md:h-[8rem] w-[5rem] md:w-[10rem] absolute service-blob-1 right-4 opacity-50"></div>
            <div class="h-[5rem] md:h-[10rem] w-[6rem] md:w-[12.5rem] absolute service-blob-2 right-4  opacity-60"></div>
            <div class="h-[4rem] md:h-[8rem] w-[4rem] md:w-[10rem] absolute service-blob-3 right-4  opacity-50"></div>
          </div>
        </div>
        
        
    </div>

    <section class="flex flex-col  mb-8 justify-center border border-gray-950 bg-neutral-950">
        <div class="flex items-center justify-between mb-4  pl-12 pr-12">
            <div class=""flex flex-col>
               <h1 class="font-semibold text-3xl mb-8 text-slate-200" >Client Success Stories</h1>
               <p class="text-lg text-slate-300">Don't just take our word for it - see what our <br>clients have to say about their experience.</p>
            </div>  
            
            <div class="flex flex-row items-center">
                <img src="/images/custom-icons/left.svg" alt="Discover Nuxt 3" class="h-10 w-10 mr-4" @click="scrollLeft" />
                <img src="/images/custom-icons/right.svg" alt="Discover Nuxt 3" class="h-10 w-10"  @click="scrollRight"/>

            </div>
        </div>
        <div class="flex flex-row justify-between overflow-hidden animate-scroll-right " ref="scrollerRight">
            <div class="flex flex-row" >
              <template v-for="(item, index) in duplicateTestimonials" :key="`testimony-${index}`">
                <div class=" flex flex-col items-center justify-center col-span-4  m-4 p-4 bg-neutral-900"  v-for="item in testimonials" style="min-width: 200px;">
                  
                    <p class="mt-2 mb-2 text-xs text-center text-slate-300">
                    {{item.description}}
                 </p>
                  <img class="h-4 md:h-4 " :src="`/images/custom-icons/${item.icon}.svg`" :alt="item.icon">
                  <img class="h-5 md:h-8 " :src="`/images/projects/${item.image}.png`" :alt="item.icon">
                  <p class="text-lg mt-2 text-slate-400 ">{{item.nm}}</p>  
                  <p class="text-sm mt-2 text-slate-400">{{item.Title}}</p>
                  
                        
           </div> 
           
          </template>
         </div>
        
        <div class="flex  justify-end mt-40">
            <div class="h-[8rem] md:h-[16rem] w-[10rem] md:w-[20rem] absolute service-blob-4 right-4 opacity-50"></div>
            <div class="h-[10rem] md:h-[20rem] w-[12rem] md:w-[25rem] absolute service-blob-5 right-4  opacity-60"></div>
            <div class="h-[8rem] md:h-[16rem] w-[8rem] md:w-[20rem] absolute service-blob-6 right-4  opacity-50"></div>
        </div>  
        </div>

        <div class="flex flex-row items-center justify-center ">
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Fedx.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Dhl.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/Ebay.svg" alt="Afriq Silicon" />
                <img class="h-12 w-auto m-4" src="~/assets/images/branding/ember.svg" alt="Afriq Silicon" />
        </div>
    </section>


    <section>

        <div class="flex flex-col border-b-2 border-gray-700 mb-8">
                <div class="">
                 <h1 class="font-semibold text-slate-200 text-4xl mb-4" >Frequently Asked Questions </h1>
                 <p class="mb-8 text-xl text-slate-300 font-regular"> Don't take our word for it ask any questions <br>we are ready for you</p>
                </div>
         
               
  <div class="border-b-2 border-gray-700">
    <div v-for="(question, index) in faq" :key="index" class="border-b-2 border-gray-700 space-x-32 ">
      <div class="flex flex-row justify-between items-center   m-4">
        <div class="flex flex-row justify-start items-start space-x-8 m-4">
        <!--<h1>{{ index + 1 }}</h1>-->
        <h1 class="ml-8 text-slate-300 text-2xl font-regular">{{ formattedIndex(index) }}</h1>
        <p class="mr-8 text-slate-300 text-xl font-regular">{{ question.text }}</p>
        </div>
        <!-- Clickable icon to toggle answer visibility -->
        <img
          class="h-12 w-auto m-4 cursor-pointer"
          :src="isOpen[index] ? '/images/custom-icons/xmark.svg' : '/images/custom-icons/plus.svg'"
          alt="Afriq Silicon"
          @click="toggleAnswer(index)"
        />      
      </div>
      
      <!-- Answer section, only visible when isOpen[index] is true -->
      <div v-if="isOpen[index]" class="flex justify-start item-start">
        <p class="text-slate-400 text-lg font-regular">{{ question.answer }}</p>
      </div>
      
    </div>
  </div>
                 
 </div>
 </section>
    
   <Cta/>

</template>

<style>
.service-blob-1{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #F3BD78;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}
.service-blob-2{
  flex-shrink: 0;
  border-radius: 43.17019rem;
  background: #9D7BE7;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}
.service-blob-3{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #EC7D43;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}
@keyframes scroll-right {
  from { transform: translateX(0); } 
  to { transform: translateX(-100%); } 
}

.service-blob-4{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #bba17f;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}
.service-blob-5{
  flex-shrink: 0;
  border-radius: 43.17019rem;
  background: #7f67b5;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}
.service-blob-6{
  flex-shrink: 0;
  border-radius: 29.12194rem;
  background: #946c57;
  mix-blend-mode: lighten;
  filter: blur(75px);
  
}

</style>