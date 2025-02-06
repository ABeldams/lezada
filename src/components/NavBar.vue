<script>
export default{
    name:'NavBar'
}
</script>

<template>
    <nav>   
 <div class="fixed w-full bg-white shadow-md  z-50 flex top-0 py-10 px-12">
    <div>
     <img src="/src/components/icons/lezada_logo.png" />
    </div>
    <div class="relative flex m-auto  group">
      <ul class="flex items-center  text-gray-600  text-10sm ml-[200px] space-x-4">
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer">Home &#9662; 
         
    <div class="absolute bg-white text-gray-500 top-[70px] right-[70px] opacity-0 z-50 w-[100%] group-hover:opacity-100">
    <div class="p-4 grid grid-cols-5 gap-10">
        <div class="border-r ">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Decor
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Creative
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Perfumes
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Trending
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Essentials
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Accessories
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Lookbook
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Furniture
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Smart Design
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Collection
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Jewelry
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Cosmetics
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Swimsuit
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Special
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Concept
           </a>
          </li>
         </ul>
        </div>
        <div>
            <img src="@/components/icons/menu-element.png"/>
        </div>
       </div>
  </div> 


        </li>
        
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showShopList=true" @mouseleave="showShopList=false">Shop &#9662;
           
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showElementList=true" @mouseleave="showElementList=false">Elements &#9662;
            <ElementsList v-if="showElementList"/>
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showPageList=true" @mouseleave="showPageList=false">pages &#9662;
            <PageList v-if="showPageList"/>
        </li>
        <li class="font-semibold border-b border-transparent  hover:text-black hover:border-black cursor-pointer" @mouseover="showBlogList=true" @mouseleave="showBlogList=false">Blog &#9662;
            <BlogList v-if="showBlogList"/>
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
</template>