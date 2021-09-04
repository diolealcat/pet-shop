<template>
    <div class="min-vh-100 container">        
     <table class="table">
          <thead>
               <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>                   
               </tr>
          </thead>
          <tbody>
               <tr v-for="prod of productList" :key="prod.id">
                    <th scope="row">{{prod.id}}</th>
                    <td>{{prod.name}}</td>
                    <td>{{prod.stock}}</td>
                    <td>{{prod.price}}</td>
               </tr>              
          </tbody>
     </table>        
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
export default {
  name: 'Features',
 
  data() {
    return {
      title: 'Vista de users',
    };
  },
  computed: {
    ...mapState(['productList']),
  },
  methods: {
    ...mapActions(['UPDATE_PRODUCTS']),
  },
  mounted() {
    this.UPDATE_PRODUCTS();
  },
}
</script>