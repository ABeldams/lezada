<template>
  
    <div class="h-100 cart-logo ">
      <span class="cart-count">{{ cartCount }}</span>
      🛒
    </div>
  </template>
  
  <script>
  export default {
    name:'CardLogo',
    props: ['cartCount'],
  };
  </script>
  