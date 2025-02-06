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

const linkHoveredOn = ref(null);
const showShopList = ref(false)
const showElementList = ref(false)
const showPageList = ref(false)
const showBlogList = ref(false)
const active = ref('new')
const setActiveItem = (item) => {
    active.value = item;
};

const linkItems = [
    {
        title: 'Home',
        listComponent: HomeList
    },
    {
        title: 'Shop',
        listComponent: ShopList
    },
    {
        title: 'Elements',
        listComponent: ElementsList
    },
    {
        title: 'Pages',
        listComponent: PageList
    },
    {
        title: 'Blog',
        listComponent: BlogList
    },
]

</script>

<template>
    <nav>
        <div class="fixed top-0 z-50 flex w-full px-10 py-5 bg-white ">
            <div>
                <img src="/src/components/icons/lezada_logo.png" />
            </div>

            <div class="relative flex m-auto">
                <ul class="flex items-center  text-gray-600  text-10sm ml-[200px] space-x-4">
                    <li v-for="item in linkItems"
                        class="font-semibold border-b border-transparent cursor-pointer hover:text-black hover:border-black"
                        @mouseover="linkHoveredOn = item.title" @mouseleave="linkHoveredOn = null">{{ item.title }}
                        &#9662;
                        <component :is="item.listComponent" v-if="linkHoveredOn === item.title" />
                    </li>
                </ul>


                <ul class="flex px-40 space-x-8 text-xl text-gray-600">
                    <li class="cursor-pointer ">
                        <Search />
                    </li>
                    <li class="cursor-pointer ">
                        <User />
                    </li>
                    <li class="cursor-pointer ">
                        <Love />
                    </li>
                    <li class="cursor-pointer">
                        <Shop />
                    </li>


                </ul>
            </div>


        </div>


    </nav>
    <div>
        <main class="flex justify-center mt-[80px]">

            <figure class="relative">
                <img src="@/components/icons/main_image.jpg" />
                <figcaption class="absolute top-[150px] left-[100px] ">
                    <h2 class="py-4 font-mono text-xl font-semibold tracking-widest text-blue-400">ACCESSORIES</h2>
                    <h1 class="text-4xl font-semibold text-black font-sans-serif">Bottle Grinder,</h1>
                    <h1 class="py-4 text-4xl font-semibold text-black font-sans-serif">Small, 2-Piece</h1>
                    <button class="bg-black text-white w-[150px] h-[50px]">SHOP NOW</button>
                </figcaption>
            </figure>


        </main>

        <div class="flex text-center space-x-9 justify-center cursor-pointer mt-[100px]">
            <div>
                <h1 @click="setActiveItem('new')"
                    :class="active === 'new' ? 'text-black text-5xl' : 'text-gray-500 text-5xl'">New</h1>
            </div>
            <div>
                <h1 @click="setActiveItem('popular')"
                    :class="active === 'popular' ? 'text-black text-5xl' : 'text-gray-500 text-5xl'">Popular</h1>
            </div>
            <div>
                <h1 @click="setActiveItem('sale')"
                    :class="active === 'sale' ? 'text-black text-5xl' : 'text-gray-500 text-5xl'">Sale</h1>
            </div>
        </div>



        <figure class="flex flex-col w-1/2 m-auto ">
            <img src="@/components/icons/cabinet.jpg" class="mt-20" />
            <figcaption>
                <div class="flex text-center space-x-9 justify-center cursor-pointer mt-[50px]">
                    <div>
                        <h1 class='text-xl text-gray-500 border-transparent border-gray-500 hover:border-b'>#summer</h1>
                    </div>
                    <div>
                        <h1 class='text-xl text-gray-500 border-transparent border-gray-500 hover:border-b'>#shelf</h1>
                    </div>
                    <div>
                        <h1 class='text-xl text-gray-500 border-transparent border-gray-500 hover:border-b'>#sale</h1>
                    </div>



                </div>
                <div class="flex flex-col items-center justify-center h-screen text-center mt-[-100px]">
                    <h1 class="text-4xl text-black">Up To 40% Off Final Sale Items. Caught in the moment!</h1>

                    <button class="bg-black text-white w-[150px] h-[50px] mt-5">SHOP NOW</button>
                </div>

            </figcaption>

        </figure>

    </div>


</template>
