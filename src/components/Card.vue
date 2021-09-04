<template >
<!-- <ModalCard  v-for="prod in product" :key="prod.id" :prod="prod" />  -->        
        <div  class="col col-sm-4  ">
            <div  class="card mx-auto"  >
                <div class="img-card-container">
                    <img :src="product.photo" class="img-fluid " style="max-height: 250px" alt="...">
                    <div>
                        <div>
                             <span v-if="product.stock > 0" class="img-card__y-stock stock">
                                 Disponible<span  class="badge bg-danger">{{product.stock}}</span>
                             </span>                             
                        </div>              
                        <div>
                             <span v-if="product.stock == 0" class="img-card__n-stock stock">
                                Sin stock <span  class="badge bg-danger">{{product.stock}}</span>
                            </span>                             
                        </div>                            
                    </div>
                </div>
                <div class="card-body">
                    <li class="list-group-item">{{product.name}}</li>
                    <li class="list-group-item">${{product.price}}</li> 
                    <span class="amount-buttons">
                        <button class="btn btn-info ">+</button>
                        <label class="show-amount" for="">                            
                        </label>
                        <button class="btn btn-info ">-</button>
                        <button  type="button" class="btn btn-dark" @click="add(product)">
                            <i rome class="bi bi-cart"></i>
                        </button>
                    </span>                 
                </div>
            </div>
        </div>
</template>

<script>
import {useStore} from 'vuex'; 
/* import ModalCard from '@/components/ModalCard.vue'; */
export default {  
/*   components:{ModalCard }, */
  props: ['product'],  
  setup(){
      const store = useStore();
      const add = product =>{
         store.dispatch('addToCart', product)
         console.log(product)
      }
      /* const increment = id => { store.commit('increment', id)}
      const reduce = id => { store.commit('reduce', id)} */
      return {
          add,
          /* increment,
          reduce */
      }
  }  
}
</script>
<style scoped>  
    .card{
        max-width: 250px;
        transition: all 1s;
    }
    .card:hover{
        transform: translateY(1%);
    }
    .img-card-container{
        text-align: center;
        position: relative;
    }
    .stock{
        width: 94px;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px;
        border-radius: 18px;       
    } 
    .img-card__y-stock{
        background-color: yellowgreen;
    }
    .img-card__n-stock{
         background-color: crimson;
    }
    .badge{        
        position: absolute;
        bottom: 13px;
        left: 81px;  
        border-radius: 100px;        
    }
    .amount-buttons{
        display: flex;
        width: 100%;
        height: 40px;
    }   
    .show-amount{
        width: 20%;
        max-width: 40px;
        border-top: thin 5px gray;
        border-bottom: thin 5px gray;
    }    
    .btn-info{
        width: 15%;
    }
    .btn-dark{
        width: 50%;
    }
    .bi-cart{        
        padding-bottom: 5px;
        font-size: 30px;
        line-height: 13px;
    }
</style>