<template>
  <div class="d-flex flex-column align-items-stretch bg-light align-items-center ">
    <!-- HEADER -->
       <Header/>
       <DataCart/>    
    <!-- Contenido -->
    <main class="d-flex flex-column flex-grow-1 flex-lg-row"  >
      <!-- Aside -->
      <Aside/>      
      <!-- Link - card - paginacion -->
      <div class="p-5" >
        <h6 class="text-start pt-2">Categorias</h6>
        <nav aria-label="breadcrumb">          
          <ol class="breadcrumb">
            <router-link class="breadcrumb-item active" to="/">Home</router-link> 
            <router-link class="breadcrumb-item" to="/products">Products</router-link>
            <router-link class="breadcrumb-item" to="/xyz">Xyz</router-link> 
            <router-link class="breadcrumb-item" aria-current="page" to="/features">Features</router-link>          
                 
          </ol>
        </nav>
        <router-view/>     
        <Pagination/>
      </div>
    </main> 
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import DataCart from '@/components/DataCart.vue'
import Aside from '@/components/Aside.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: { 
    Header,
    DataCart,
    Aside,  
    Pagination   
  },
}
</script>
<style>
  body{
    display: flex;
    flex-direction: column;   
    min-height: 100vh;   
  }   
</style>
