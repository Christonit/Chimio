<template>
  <nav class="nav nav-tabs justify-content-center ml-md-5" id="nav-tab" role="tablist">
    <router-link class="nav-item nav-link d-flex justify-content-center" active-class="active" to="/hot"><i v-if="!isMobile" class="sys-icon icon-sm hot-i mr-2"></i>Hot</router-link>
    <!--<router-link class="nav-item nav-link" :to="{name:'hot', params:{resolution:resolution}}">Hot</router-link>-->
    <router-link class="nav-item nav-link d-flex justify-content-center" active-class="active" to="/favorites" ><i v-if="!isMobile" class="sys-icon icon-sm fav-i mr-2"></i> Favorites</router-link>
    <router-link class="nav-item nav-link d-flex justify-content-center" active-class="active" to="/my-secrets" ><i v-if="!isMobile" class="sys-icon icon-sm secret-i mr-2"></i> My Secrets</router-link>

    <!--<a class="nav-item nav-link active" id="hot-component" data-toggle="tab" href="#hot-secrets" role="tab" aria-controls="hot-secrets" aria-selected="true">Hot</a>-->
    <!--<a class="nav-item nav-link" id="favorites-component" data-toggle="tab" href="#favorites" role="tab" aria-controls="favorites" aria-selected="false">Favorites</a>-->
    <!--<a class="nav-item nav-link" id="my-secrets-component" data-toggle="tab" href="#my-secrets" role="tab" aria-controls="my-secrets" aria-selected="false">My chimios</a>-->
  </nav>
</template>

<script>
    export default {
      name: "sectionsNavigation",
      props:['isMobile']
      // props:{resolution: Object},


    }
</script>

<style scoped>

</style>
