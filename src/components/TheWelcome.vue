<script setup>
import HomeList from './homeList.vue';
import Love from './icons/Love.vue';
import Search from './icons/Search.vue';
import Shop from './icons/Shop.vue';
import User from './icons/User.vue';
import ShopList from './shopList.vue';
import ElementsList from './elementsList.vue';
import PageList from './pageList.vue';
import BlogList from './blogList.vue';
import { ref } from 'vue';
const showShopList=ref(false)
const showElementList=ref(false)
const showPageList=ref(false)
const showBlogList=ref(false)
const active=ref('new')
const setActiveItem = (item) => {
      active.value = item;
    };

</script>

<template>
<nav>   
 <div class="fixed w-full bg-white  z-50 flex top-0 py-5 px-10 ">
    <div>
     <img src="/src/components/icons/lezada_logo.png" />
    </div>
    <div class="relative flex m-auto">
      <ul class="flex items-center  text-gray-600  text-10sm ml-[200px] space-x-4">
        <li class="group font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer">Home &#9662; 
            
           <HomeList class="hidden    group-hover:block  "/>     
        </li>
        
        <li class="group2 font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showShopList=true" @mouseleave="showShopList=false">Shop &#9662;
            <ShopList class="hidden"/> 
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showElementList=true" @mouseleave="showElementList=false">Elements &#9662;
            <ElementsList v-if="showElementList" class="absolute z-10"/>
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showPageList=true" @mouseleave="showPageList=false">pages &#9662;
            <PageList v-if="showPageList" class="absolute z-10"/>
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showBlogList=true" @mouseleave="showBlogList=false">Blog &#9662;
            <BlogList v-if="showBlogList" class="absolute z-10"/>
        </li>
      </ul>

    
      <ul class="flex space-x-8 text-gray-600  text-xl px-40">
        <li class=" cursor-pointer">
            <Search/>
        </li>
        <li class=" cursor-pointer">
            <User/>
        </li>
        <li class=" cursor-pointer">
            <Love/>
        </li>
        <li class="cursor-pointer">
            <Shop/>
        </li>
        
      
    </ul>
    </div>

   
 </div>
 
        
</nav>
 <div>   
 <main class="flex justify-center mt-[80px]">
    
    <figure class="relative">
        <img src="@/components/icons/main_image.jpg"/>
       <figcaption class="absolute top-[150px] left-[100px] ">
        <h2 class="text-xl text-blue-400 font-semibold font-mono tracking-widest py-4">ACCESSORIES</h2>
        <h1 class="text-black font-sans-serif font-semibold text-4xl">Bottle Grinder,</h1>
        <h1 class="text-black font-sans-serif font-semibold text-4xl py-4">Small, 2-Piece</h1>
        <button class="bg-black text-white w-[150px] h-[50px]">SHOP NOW</button>
       </figcaption>
    </figure>


 </main>

 <div class="flex text-center space-x-9 justify-center cursor-pointer mt-[100px]">
        <div>
            <h1 @click="setActiveItem('new')":class=" active === 'new' ? 'text-black text-5xl'  : 'text-gray-500 text-5xl'">New</h1>
        </div>
        <div>
            <h1  @click="setActiveItem('popular')":class=" active === 'popular' ? 'text-black text-5xl'  : 'text-gray-500 text-5xl'">Popular</h1>
        </div>
        <div>
            <h1  @click="setActiveItem('sale')":class=" active === 'sale' ? 'text-black text-5xl'  : 'text-gray-500 text-5xl'">Sale</h1>
        </div>
 </div>


       
    <figure class="flex flex-col m-auto w-1/2 ">
        <img src="@/components/icons/cabinet.jpg" class="mt-20"/>
       <figcaption>
        <div class="flex text-center space-x-9 justify-center cursor-pointer mt-[50px]">
        <div>
            <h1  class='text-gray-500 text-xl  border-transparent hover:border-b border-gray-500'>#summer</h1>
        </div>
        <div>
            <h1  class='text-gray-500 text-xl border-transparent hover:border-b border-gray-500'>#shelf</h1>
        </div>
        <div>
            <h1  class='text-gray-500 text-xl  border-transparent hover:border-b border-gray-500'>#sale</h1>
        </div>

 
        
 </div>
 <div class="flex flex-col items-center justify-center h-screen text-center mt-[-100px]">
   <h1 class="text-4xl  text-black">Up To 40% Off Final Sale Items. Caught in the moment!</h1>

   <button class="bg-black text-white w-[150px] h-[50px] mt-5">SHOP NOW</button>
</div>

       </figcaption>
       
    </figure>
   
</div>

 
</template>
