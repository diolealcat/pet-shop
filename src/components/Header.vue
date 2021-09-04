<template>
    <div class="d-flex justify-content-between bg-dark text-white  px-5 py-3">
      
      <h1 class="logo pt-3">Pet Shop</h1>     
      <div class="">
        <!-- <input class="search " type="text"> -->        
        <Cart/>
      </div>
    </div> 
</template>

<script>
import Cart from '@/components/Cart.vue';
export default {
    components:{Cart}
}
</script>

