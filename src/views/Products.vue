<template>  
    <div class="min-vh-100 row cards" >     
      <Card v-for="prod in products" :key="prod.id" :product="prod"/>  
    </div>  
</template>
<script>
import { useStore } from 'vuex';
import { computed, onMounted} from 'vue';
/* import { mapState, mapActions } from 'vuex'; */
import Card from '@/components/Card.vue';
export default {
  name: 'Products',  
  components: {   
    Card,     
  },
  setup() {
    const store = useStore();
    onMounted(() => {
        store.dispatch('getDataProducts')
    })
    const products = computed(() => store.state.productList)
    /* const cart = computed(() => store.state.cart) */
    return {products}
  },  
}
</script>
<style scoped>
  .cards{
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
    margin-top: 5%;
  }    
</style>