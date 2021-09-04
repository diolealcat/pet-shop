<template>     
    <div class="d-flex datacart">
        <div class="datacart__align collapse position-absolute" id="multiCollapseExample2"> 
            <h5 class="card-title">Resumen de producto</h5>
            <table class="table">               
                <tbody>                    
                    <span v-if="Object.keys(items).length === 0">Carro vacio vacio</span>
                    <Item v-else v-for="item in items" :key="item.id" :item="item" />                   
                </tbody>                    
                <tfoot>
                     <span>Total ${{totalPrice}} </span>
                </tfoot>                
            </table> 
            <button class="btn btn-danger" @click="emptyCart">Limpiar Carro</button>      
        </div>
    </div>    
</template>
<script>
import { computed } from 'vue';
import {useStore} from 'vuex';
import Item from './Item.vue';
export default {
    components: {Item},    
    setup(){
        const store = useStore();
        const items = computed(() => store.state.cart);        
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}
        return {items, totalPrice, emptyCart}
    }
}
</script>
<style scoped>
    table{
        color: white;
    } 
    .datacart__align{       
        width: 100%;
        height: auto; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        right: 0px;      
        padding: 20px;
        z-index: 5;
        opacity: 0.9;
        background-color: black;
        color: white;
    } 
     @media (min-width: 576px) {
        .datacart__align{ 
            width: 30%;      
            min-width: 500px;   
        } 
    }
       
</style>