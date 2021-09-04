<template>
    <div id="aside" class="d-none d-lg-block aside bg-secondary pe-4 pt-2 text-white d-flex flex-column">
        <h4 class="text-ceneter ms-2">Cateogorias</h4>                  
        <ul class="menu text-white">
            <li><a href="#">Alimentos</a></li>
            <li><a href="#">Juegues</a></li>
            <li><a href="#">Perros</a></li>
            <li><a href="#">Medicamentos</a></li>           
        </ul>
    </div>
</template>
<style scoped>
  .menu{
    width: 150px;
    list-style-type: none;
    color: white;
    display: flex;
    flex-direction: column;
  } 
  .menu li{
   text-align: start;
   margin-right: 40px;
   padding-bottom: 10px;
  } 
  .menu a{    
    text-decoration: none;
    color: lightgreen;
    transition: all 300ms;
  } 
  .menu li a:hover{ 
      font-weight: bolder;
    letter-spacing: 2px;  
    
  }
</style>