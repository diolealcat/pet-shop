<template>  
   <tr >
        <td scope="row">
            <span class="flex-column">
                <label for="">{{item.name}}</label>
                <label>${{item.price}}</label>
            </span>
        </td>
        <td>
            <span class="amount-buttons">
                <button class="btn btn-info " @click="increment(item.id)">+</button>
                <label class="show-amount" for="">
                    {{item.amount }}
                </label>
                <button class="btn btn-info " @click="reduce(item.id)">-</button>
            </span>
        </td>
        <td>
            <label class="">Sub-total ${{item.price * item.amount}}</label>
        </td>    
    </tr>          
   
</template>
<script>
import { useStore} from 'vuex';
export default {
    props: ['item'],
    setup(){
        const store = useStore()
        const increment = id => { store.commit('increment', id)}
        const reduce = id => { store.commit('reduce', id)}
        return {increment, reduce}
    }
}
</script>
<style scoped> 
    .flex-column{
        display: flex;
        flex-direction: column;
    }
    .amount-buttons{
        display: flex;
    }   
    .show-amount{
        width: 40px;
        max-width: 40px;
        text-align: center;
        border: 1px solid gray;
    }
</style>