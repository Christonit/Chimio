<template>
  <nav class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
    <router-link class="nav-item nav-link" to="/">Hot</router-link>
    <!--<router-link class="nav-item nav-link" :to="{name:'hot', params:{resolution:resolution}}">Hot</router-link>-->
    <router-link class="nav-item nav-link" to="/my-secrets" >My Secrets</router-link>
    <router-link class="nav-item nav-link" to="/favorites" >Favorites</router-link>
    <!--<a class="nav-item nav-link active" id="hot-component" data-toggle="tab" href="#hot-secrets" role="tab" aria-controls="hot-secrets" aria-selected="true">Hot</a>-->
    <!--<a class="nav-item nav-link" id="favorites-component" data-toggle="tab" href="#favorites" role="tab" aria-controls="favorites" aria-selected="false">Favorites</a>-->
    <!--<a class="nav-item nav-link" id="my-secrets-component" data-toggle="tab" href="#my-secrets" role="tab" aria-controls="my-secrets" aria-selected="false">My chimios</a>-->
  </nav>
</template>

<script>
    export default {
      name: "sectionsNavigation",
      // props:{resolution: Object},


    }
</script>

<style scoped>

</style>
