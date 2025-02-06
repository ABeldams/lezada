<script>
export default{
    name:'shopList'
}
</script>
<template>
  
  <div class="absolute bg-white text-gray-500 top-[70px] right-[70px]  z-50 w-[100%] ">
    <div class="p-4 grid grid-cols-4 gap-10">
        <div class="border-r ">
         <h3 class="font-semibold mb-2">
          Group One
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Left Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Right Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            No Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
            Full Width No Space
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width No Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width Left Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width Right Sidebar
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
           Group Two
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Basic
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Full Width
           

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Full Width Right Thumb
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Sticky Details
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Shopping Cart
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
           Wishlist

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
           Compare
           </a>
          </li>
          
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Shop Pages
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Checkout
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Order Tracking

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            My Account

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Login Register

           </a>
          </li>
         </ul>
        </div>
        
        <div>
            <img src="@/components/icons/megamenu-shop.png"/>
        </div>
       </div>
  </div> 
 
</template>