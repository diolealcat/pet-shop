<template>
    <button type="button" class="btn-cart" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
        <i rome class="bi bi-cart"></i>
        <span  class="badge bg-danger">
            {{totalAmount}}           
        </span>     
    </button>  
</template>
<script>
import { computed } from 'vue';
import {useStore} from 'vuex';
export default {   
    setup(){
        const store = useStore();
        const totalAmount = computed(() => store.getters.totalAmount);
        return { totalAmount}
    }
}
</script>
<style >
    .btn-cart{
        position: relative;
        height: 80px;
        width: 80px;
        border-radius: 100px;
        background-color: yellowgreen;        
        transition: all 300ms;
    }    
    .btn-cart:active{
        padding-right: 5%;        
    }
    .bi-cart{
        text-align: center;
        font-size: 40px;
    }
    .badge{
        position: absolute;       
        border-radius: 100px;      
        top: 0;
    }
</style>

    
